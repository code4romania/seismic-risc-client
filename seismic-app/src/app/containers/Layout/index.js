import React, { Component } from 'react';
import { Layout as AntLayout } from 'antd';

import CustomHeader from '../../components/Header';
import CustomFooter from '../../components/Footer';

class Layout extends Component {
  render() {
    return (
      <AntLayout className="layout">
        <CustomHeader />
      </AntLayout>
    )
  }
}

export default Layout;
