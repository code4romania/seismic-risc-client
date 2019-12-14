import React from "react";
import './Admin.css';
import { Layout, Menu, Icon } from 'antd';
import {Link} from "react-router-dom";
const { Footer, Sider, Content, Header } = Layout;

class Admin extends React.Component {

  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
       <Layout style={{ minHeight: '100vh' }}>
       <Header>
          <div>
          <img style={{"object-fit": "scale-down"}} width={'200px'} src={require('../../assets/logo_seismic_risk.png')} className="logo" />
          <span style={{'padding': '30px'}}>adauga o pagina</span>
          </div>
       </Header>
      <Layout>
        <Sider
            theme={"light"}
             collapsible
             collapsed={this.state.collapsed}
             onCollapse={this.onCollapse}>
          <Menu defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="appstore" />
              <span>Dashboard</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="compass" />
              <span>Overview data</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="mail" />
              <span>Create new page</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="setting" />
              <span>Create new post</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="mail" />
              <span>View all pages</span>
            </Menu.Item>
            <Menu.Item key="6">
              <Icon type="setting" />
              <span>View all posts</span>
            </Menu.Item>
            <hr />
            <Menu.Item>
              <Link to="/">Go back</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content>
          <div className="content">
            Welcome to admin
          </div>
          <Footer>footer</Footer>
        </Content>
      </Layout>
    </Layout>
    )
  }
}

export default Admin;
