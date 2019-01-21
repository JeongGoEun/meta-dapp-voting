import React from 'react'
import { Layout, Menu, Button, Row, Col, Modal } from 'antd'
import {Votes} from './components/Votes'
import './App.css';

//web3
import getWeb3Instance from '../src/ethereum/web3'

const { Header, Content, Footer } = Layout;

class App extends React.Component {
  state = {
    loadWeb3: false,
    nav: '1',
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

  onMenuClick = ({ key }) => {
    this.setState({ nav: key })
    console.log(key)
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

  getContent() {
    if (!this.state.loadWeb3) return;
    switch (this.state.nav){
      case '1': return <Votes title='All'/>
      case '2': return <Votes title='Active'/>
      default:
    }
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
              onClick = {this.onMenuClick}
            >
              <Menu.Item key="1">All</Menu.Item>
              <Menu.Item key="2">Active</Menu.Item>
            </Menu>
            </Col>
            <Col span={2}><Button>New Ballot</Button></Col>
          </Row>
        </Header>

        <Content>
        {this.state.loadWeb3
        ?<div> {this.getContent()} </div>
        :<div> { this.getErrModal()} </div>
        }
        </Content>
       
        <Footer style={{ textAlign: 'center'}}>
          Ant Design ©2018 Created by METADIUM
        </Footer>
      </Layout>
    )
  }
}

export default App;
