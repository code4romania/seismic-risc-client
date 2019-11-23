import React from 'react';
import Map from '../components/Map';

import LinkButton from '../components/LinkButton';
import '../App.css';

const Home = () => (
  <div>
    <LinkButton to="/blog" type="primary">
      Blog
    </LinkButton>
    <Map />
  </div>
);

export default Home;
