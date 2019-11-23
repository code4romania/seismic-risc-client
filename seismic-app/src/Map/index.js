import React from 'react';
import GoogleMapReact from 'google-map-react';

import api from '../api';

import RiskCategoryOnePin from './assets/RiskCategoryOnePin.svg';
import RiskCategoryTwoPin from './assets/RiskCategoryTwoPin.svg';
import RiskCategoryThreePin from './assets/RiskCategoryThreePin.svg';

const RISK_CATEGORY_1 = 'U1';
const RISK_CATEGORY_2 = 'U2';
const RISK_CATEGORY_3 = 'U3';

const Pins = {
  [RISK_CATEGORY_1]: RiskCategoryOnePin,
  [RISK_CATEGORY_2]: RiskCategoryTwoPin,
  [RISK_CATEGORY_3]: RiskCategoryThreePin
};

const { REACT_APP_GOOGLE_MAPS_KEY } = process.env;

// Currently centered to the middle of Bucharest, RO
const mapSettings = {
  center: {
    lat: 44.4361414,
    lng: 26.1027202
  },
  zoom: 12
};

const Pin = ({ riskCategory }) => <img src={Pins[riskCategory]} />;

const useAsyncHook = () => {
  const [result, setResult] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function fetchPinList() {
      try {
        setLoading(true);
        const response = await api.getBuildings();
        setLoading(false);

        setResult(response);
      } catch (error) {
        setLoading(null);
      }
    }

    fetchPinList();
  }, []);

  return [result, loading];
};

const MESSAGES = {
  ALL: 'Toate clădirile cu risc seismic',
  U1: 'Clasa U1 de risc seismic',
  U2: 'Clasa U2 de risc seismic',
  U3: 'Clasa U3 de risc seismic'
};

// Logic works but component needs styling.
const FilterByRisk = ({ setFilter }) => (
  <div>
    <div onClick={() => setFilter('ALL')}>{MESSAGES['ALL']}</div>
    <div onClick={() => setFilter('U1')}>{MESSAGES['U1']}</div>
    <div onClick={() => setFilter('U2')}>{MESSAGES['U2']}</div>
    <div onClick={() => setFilter('U3')}>{MESSAGES['U3']}</div>
  </div>
);

const Map = () => {
  const [result, loading] = useAsyncHook();
  const [filter, setFilter] = React.useState('ALL');
  if (loading) return 'Loading...';

  const filterResult = () => {
    console.log(filter);
    if (filter === 'ALL') {
      return result;
    } else {
      return result.filter(({ fields: { risk_category } }) => risk_category === filter);
    }
  };
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <FilterByRisk setFilter={setFilter} />
      <GoogleMapReact
        bootstrapURLKeys={{ key: REACT_APP_GOOGLE_MAPS_KEY }}
        defaultCenter={mapSettings.center}
        defaultZoom={mapSettings.zoom}
      >
        {filterResult().map(({ fields: { lat, lng, risk_category } }, key) => (
          <Pin key={key} lat={lat} lng={lng} riskCategory={risk_category} />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
