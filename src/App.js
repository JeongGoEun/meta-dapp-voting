import React from 'react';
import { Layout, Menu, Button, Input, List, Progress } from 'antd';
import './App.css';
import { columns } from './components/columns'

const { Header, Content, Footer } = Layout;
const ballotColumns = columns.ballotColumns;

class App extends React.Component {
  
  constructor (props) {
    super(props);
  }

  getBallotItem () {

  }

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
            <Menu.Item> <Button style={{ marginLeft: '30%' }}>New Ballot</Button> </Menu.Item>
          </Menu>
        </Header>

        <Content>
          <div className='searchDiv'>
            <Input.Search
              placeholder="Search"
              onSearch={value => console.log(value)}
              enterButton
            />
          </div>
          <div className='contentDiv'>
            <h1 style={{ padding: '2% 0 0 0' }} > All </h1>
            <div style={{ background: '#fff', padding: 24, minHeight: 600 }}>
              <List
                grid = {{ gutter: 27, column: 6}}
                dataSource = {ballotColumns}
                renderItem = { item => (
                  <List.Item>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.key}</p>
                    </div>
                  </List.Item>
                )}
              /><hr></hr>

              <div>
                <div className='voteDiv' style={{float: 'left'}}>
                  <Button id='noVotingBtn'>No</Button>
                  <div style={{float: 'right', width:'85%'}}>
                    <h4 style={{float: 'right'}} >0 votes</h4>
                    <Progress percent={30} />
                  </div>
                </div>
                <div className='voteDiv' style={{float: 'right'}}>
                  <Button id='yesVotingBtn'>Yes</Button>
                  <div style={{float: 'right', width:'85%'}}>
                    <h4 style={{float: 'right'}} >0 votes</h4>
                    <Progress percent={30} />
                  </div>
                </div>
              </div>

              <div className = 'ballotExplainDiv'>
                <p>>  Minimum 8 from 24 validators are required to pass the proposal</p> <br></br>
                <p>>  This is a ballot to remove James McGrath from consensus on POA Sokol network. On December 28th, 2018 James requested to be removed from consensus and to remove his responsibilities as a validator. On behalf of all validators we thank James for his service and wish him well on his next endeavors.</p>
              </div>
            </div>
          </div>
        </Content>

        <Footer style={{ textAlign: 'center'}}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    )
  }
}

export default App;
