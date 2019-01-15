import React, { Component } from 'react';
import { Layout, Menu, Button, Input } from 'antd';
import logo from './logo.svg';
import './App.css';

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header style={{ padding: '0 15%' }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px'}}
          >
            <Menu.Item key="1" style={{ marginLeft: '60%' }} >All</Menu.Item>
            <Menu.Item key="2">Active</Menu.Item>
            <Menu.Item key="3">To Finalize</Menu.Item>
            <Button style={{ marginLeft: '3%' }}>New Ballot</Button>
          </Menu>
        </Header>

        <div id='searchDiv'>
          <Input.Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            enterButton
          />
        </div>

        <Content style={{ padding: '0 15%' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
        </Content>

        <Footer style={{ textAlign: 'center'}}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default App;
