import axios from 'axios';
const BUILDINGS = 'buildings';

const { REACT_APP_BASE_URL } = process.env;
const getBuildings = async () => {
  try {
    const buildings = await axios.get(`${REACT_APP_BASE_URL}/${BUILDINGS}`);
    return buildings.data;
  } catch (err) {
    throw new Error(err);
  }
};

export default {
  getBuildings
};
