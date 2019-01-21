import React from 'react';
import { Layout, Menu, Button, Input, List, Progress, Row, Col, Modal } from 'antd';
import './App.css';
import { columns } from './components/columns'

//web3
import getWeb3Instance from '../src/ethereum/web3'

const { Header, Content, Footer } = Layout;
const ballotColumns = columns.ballotColumns;

class App extends React.Component {
  state = {
    loadWeb3: false,
  };

  constructor (props) {
    super(props);

    // Get web3 instance
    getWeb3Instance().then(async web3Config => {
      console.log('web3 information: ', web3Config)
      this.setState({ loadWeb3: true })
    }, async error => {
      console.log('getWeb3 error: ', error)
      this.setState({ loadWeb3 : false })
    })
  }

  getErrModal() {
    return <Modal
      title = 'ERROR'
      visible = {!this.state.loadWeb3}
      okButtonProps = {{disabled: true}}
      cancelButtonProps = {{disabled: true}}
    >
      <p>This is an unknown network.</p>
    </Modal>
  }

  render() {
    return (
      <Layout className="layout">
        <Header style={{ padding: '0 15%' }}>
          <Row>
            <Col span={4}><div className="logo" /></Col>
            <Col offset={15} span={3}>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px'}}
            >
              <Menu.Item key="1">All</Menu.Item>
              <Menu.Item key="2">Active</Menu.Item>
            </Menu>
            </Col>
            <Col span={2}><Button>New Ballot</Button></Col>
          </Row>
        </Header>

        <Content>
        {this.state.loadWeb3 ?
        <div>
          <div className='searchDiv'>
            <Input.Search
              placeholder="Search"
              onSearch={value => console.log(value)}
              enterButton
            />
          </div>
          <div className='contentDiv'>
            <h1 style={{ padding: '2% 0 0 0' }} > All </h1>
            <div style={{ background: '#fff', padding: 24, minHeight: 500 }}>
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
                <p>>  Minimum {8} from {24} validators are required to pass the proposal</p> <br></br>
                <p>>  This is a ballot to remove James McGrath from consensus on POA Sokol network. On December 28th, 2018 James requested to be removed from consensus and to remove his responsibilities as a validator. On behalf of all validators we thank James for his service and wish him well on his next endeavors.</p>
              </div>
              <div>
                <Button id = 'finalizeBtn' disabled >Finalized</Button>
                <h3 style={{float: 'right'}}>Key Ballot ID: {71}</h3>
              </div>
            </div>
          </div>
        </div>
        :<div>{ this.getErrModal() }</div>
        }
        </Content>
       
        <Footer style={{ textAlign: 'center'}}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    )
  }
}

export default App;
