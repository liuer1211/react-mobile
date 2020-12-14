import React, {Component} from 'react'
import {WingBlank, WhiteSpace, Card, NavBar, Icon} from 'antd-mobile'
import {DatePicker,List,InputItem,Button} from 'antd-mobile'

import NavFooter from '../../components/nav-footer/nav-footer'
import {goodsFun} from "../../redux/actions";
// import './css/model.css'

import QueueAnim from 'rc-queue-anim'
import {connect} from "react-redux";

const Header = Card.Header
const Body = Card.Body


const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
// GMT is not currently observed in the UK. So use UTC now.
const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));

// Make sure that in `time` mode, the maxDate and minDate are within one day.
let minDate = new Date(nowTimeStamp - 1e7);
const maxDate = new Date(nowTimeStamp + 1e7);
// console.log(minDate, maxDate);
if (minDate.getDate() !== maxDate.getDate()) {
    // set the minDate to the 0 of maxDate
    minDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
}

// function formatDate(date) {
//     /* eslint no-confusing-arrow: 0 */
//     const pad = n => n < 10 ? `0${n}` : n;
//     const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
//     const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
//     return `${dateStr} ${timeStr}`;
// }
//
// // If not using `List.Item` as children
// // The `onClick / extra` props need to be processed within the component
// const CustomChildren = ({ extra, onClick, children }) => (
//     <div
//         onClick={onClick}
//         style={{ backgroundColor: '#fff', height: '45px', lineHeight: '45px', padding: '0 15px' }}
//     >
//         {children}
//         <span style={{ float: 'right', color: '#888' }}>{extra}</span>
//     </div>
// );
class Model extends Component {
    state = {
        date: now,
        time: now,
        utcDate: utcNow,
        dpValue: null,
        customChildValue: null,
        visible: false,
    }
    //登录方法
    login=() =>{
        console.log(this)
    }

    //from-login-to-register
    toRegister =() =>{
        console.log(this)
    }

    //
    componentDidMount() {
        this.props.goodsFun()
    }

    render () {
        console.log(this.props)
        let list = [
            {id:'1',name:'张三',pro:'web前端',com:'某公司',wri:'html+css+js'},
            {id:'2',name:'李三',pro:'Java后端',com:'某公司',wri:'spring+springMvc+mybatis'}
        ]
        return (
            <div>
                {/*导航*/}
                <NavBar mode="dark" icon={<Icon type="left" />}
                        rightContent={[<Icon key="1" type="ellipsis" />]}
                        className='sticky-header'>练习</NavBar>
                {/*列表 动画 卡片*/}
                <WingBlank style={{marginBottom:60, marginTop:50}}>
                    <QueueAnim type='scale'>
                        {/*循环*/}
                        {
                            list.map(item=>(
                                <div key={item.id}>
                                    <WhiteSpace/>
                                    <Card>
                                        <Header className='header-img' thumbStyle={{borderRadius:50+'%'}}
                                                thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                                                title="title"
                                                extra={item.name}/>
                                        <Body>
                                            <div>职位: {item.pro}</div>
                                            <div>公司: {item.com}</div>
                                            <div>描述: {item.wri}</div>
                                        </Body>
                                    </Card>
                                </div>
                            ))
                        }
                    </QueueAnim>
                </WingBlank>
                {/*表单*/}
                <WingBlank>
                    <List>
                        <InputItem placeholder='name' >name:</InputItem>
                        <WhiteSpace/>
                        <InputItem placeholder='password' type='password' >password:</InputItem>
                        <WhiteSpace/>
                        <DatePicker
                            mode="date"
                            title="Select Date"
                            extra="Optional"
                            value={this.state.date}
                            onChange={date => this.setState({ date })}
                        >
                            <List.Item arrow="horizontal">Date</List.Item>
                        </DatePicker>
                        <WhiteSpace className='white-space'/>
                        <Button type='primary' onClick={this.login}>Login</Button>
                        <WhiteSpace/>
                        <Button onClick={this.toRegister}>no having</Button>
                    </List>
                </WingBlank>
                <div style={{marginBottom:60}}></div>
                {/*底部*/}
                <NavFooter/>
            </div>
        )
    }
}

// 先执行这里，获取常量
export default connect(
    state =>({goods:state.goods}), //变量：后台数据
    {goodsFun}                   //函数：登录异步方法
)(Model)