import React, { Component } from 'react';
import { Layout as AntLayout, Menu } from 'antd';

import logo from '../../images/layout/logo.svg';

const { Header } = AntLayout;
const { Item } = Menu;
class CustomHeader extends Component {
  render() {
    return (
      <Header>
        <div className="logo"><img src={logo} alt="seismic-risc-logo"/></div>
        <div className="menu-content">
          <Menu
            theme="dark"
            mode="horizontal"
          >
            <Item key="despre">Despre</Item>
            <Item key="ghid">Ghid pentru asociatii de proprietari</Item>
            <Item key="legislatie">Legislatie</Item>
            <Item key="bucurestiul-vulnerabil">Bucurestiul Vulnerabil</Item>
            <Item key="contact">Contact</Item>
          </Menu>
        </div>
      </Header>
    )
  }
}

export default CustomHeader;
