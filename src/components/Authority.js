import React from 'react';
import { Button, List, Progress } from 'antd';
import './style/style.css'
import logo from '../META_Logo_black.svg';
import { testData } from './test/testData'

class Authority extends React.Component {
    data = {
        authorityItems: [],
    }
    
    state = {
        getAuthorityInfo: false,
    }

    constructor(props) {
        super(props)
        this.getAuthorityList()
    }

    componentWillMount() {
        this.getAuthorityList()
    }

    onApplyBtnClick() {
        window.open('https://docs.google.com/forms/d/e/1FAIpQLSfpSAevry4nqjljMACD1DhVzP8oU9J0OgvN49bGakofcZa49w/viewform?fbzx=2570300132786392930', '_blank'); 
    }

    getAuthorityList() {
        let list = []
        console.log('getAuthorityList length: ', testData.govTestData.length);

        testData.govTestData.map(item => {
            list.push(
                <div className = 'authorityComp'>
                    <div style={{float: 'left', width: '19%', backgroundColor: '#FFEAF6'}}>
                        <img src={logo} alt='' />
                    </div>
                    <div style={{padding: 30, float: 'left',width: '81%'}}>
                        <div style={{height: '70px'}}>
                            <h2 style={{float: 'left'}}>{item.company}</h2>
                            <h4 style={{float: 'right'}}>Address: {item.propasalAddr}</h4>
                        </div>
                        <div style={{height: '80px'}}><p>{item.description}</p></div>
                        <div style={{height: '80px'}}>
                            <div><h3><a href="http://www.metadium.com" target='_blank'>{item.company} Web site</a></h3></div>
                            <div>
                                {this.getSNSList(item.sns)}
                            </div>
                        </div>
                    </div>
                </div>
            )
        })

        this.data.authorityItems = list;
        this.setState({ getAuthorityInfo: true })
    }

    getSNSList(snsList) {
        let sns = []
        for (var key in snsList) {
            sns.push(<Button className='snsGroup'>{snsList[key]}</Button>)
        }
        return sns;
    }

    render() {
        return (
            <div>
                <div className='contentDiv'>
                    <div><Button id='applyBtn' onClick={this.onApplyBtnClick} style={{margin: '1% 0'}}>Apply for Authority</Button></div>
                    <div style={{ padding: 20, minHeight: 500 }}>
                        {this.state.getAuthorityInfo
                        ? this.data.authorityItems
                        :<div>empty</div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export { Authority }