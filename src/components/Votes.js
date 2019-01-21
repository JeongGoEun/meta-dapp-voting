import React from 'react';
import { Button, List, Progress } from 'antd';
import './style/style.css'

import { columns } from './columns'

const ballotColumns = columns.ballotColumns;

class Votes extends React.Component {
    render() {
        return (
            <div>
                <div className='contentDiv'>
                    <h1 style={{ padding: '2% 0 0 0' }} > {this.props.title} </h1>
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
        )
    }
}
export { Votes }