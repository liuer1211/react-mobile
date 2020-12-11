// 注册路由
import React,{Component} from 'react'
import {NavBar,WingBlank,List,InputItem,WhiteSpace,Button} from 'antd-mobile'
// NavBar 头部导航；两翼留白 WingBlank；List 列表；InputItem 输入；WhiteSpace 上下留白；Button 按钮
// import {NavBar,Icon,WingBlank,List,InputItem,WhiteSpace,Button} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {login} from "../../redux/actions";
import Logo from '../../components/logo/logo'


// const ListItem=List.Item
export class Login extends Component{
    //数据
    state={
        username:'',
        password:'',
    }
    //登录方法
    login=() =>{
        // console.log(this)
        this.props.login(this.state)
    }

    //from-login-to-register
    toRegister =() =>{
        this.props.history.replace('/register')
    }
    //处理输入数据的改变：更新对应的状态
    handleChange=(name,val)=>{
        //更新状态
        this.setState({
            [name]:val  //属性名不是name，而是name的值
        })
    }

    render() {
        //后台数据,刚进来没有，展示登陆页
        const {msg,redirectTo}=this.props.user

        //有值重定向
        if(redirectTo){
            return <Redirect to={redirectTo}/>
        }
        return(
            <div>
                {/*头*/}
                <NavBar>聊 &nbsp; 天 &nbsp; 互 &nbsp; 动 </NavBar>
                {/*<NavBar mode="dark" icon={<Icon type="left" />}*/}
                {/*        onLeftClick={() => console.log('onLeftClick')}*/}
                {/*        rightContent={[*/}
                {/*            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,*/}
                {/*            <Icon key="1" type="ellipsis" />,*/}
                {/*        ]}>聊 &nbsp; 天 &nbsp; 互 &nbsp; 动 </NavBar>*/}
                {/*logo 传递参数*/}
                <Logo name={"fromLogin"}/>
                {/*列表*/}
                <WingBlank>
                    <List>
                        {msg ? <div className='error-msg'>{msg}</div>:null}
                        <InputItem placeholder='name' onChange={val=>{this.handleChange('username',val)}}>name:</InputItem>
                        <WhiteSpace/>
                        <InputItem placeholder='password' type='password' onChange={val=>{this.handleChange('password',val)}}>password:</InputItem>
                        <WhiteSpace/>
                        <Button type='primary' onClick={this.login}>Login</Button>
                        <WhiteSpace/>
                        <Button onClick={this.toRegister}>no having</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}
// 先执行这里，获取常量
export default connect(
    state =>({user:state.user}), //变量：后台数据
    {login}                   //函数：登录异步方法
)(Login)


// react-redux仅有2个API，Provider和connect，Provider提供的是一个顶层容器的作用，实现store的上下文传递。
// 原理解析
// 首先connect之所以会成功，是因为Provider组件：
// 在原应用组件上包裹一层，使原来整个应用成为Provider的子组件
// 接收Redux的store作为props，通过context对象传递给子孙组件上的connect

// 1. 高阶函数
// 1). 一类特别的函数
    // a. 接受函数类型的参数
    // b. 返回值是函数
// 2). 常见
    // a. 定时器: setTimeout()/setInterval()
    // b. Promise: Promise(() => {}) then(value => {}, reason => {})
    // c. 数组遍历相关的方法: forEach()/filter()/map()/reduce()/find()/findIndex()
    // d. 函数对象的bind()
    // e. Form.create()() / getFieldDecorator()()
// 3). 高阶函数更新动态, 更加具有扩展性
//
// 2. 高阶组件
// 1). 本质就是一个函数
// 2). 接收一个组件(被包装组件), 返回一个新的组件(包装组件), 包装组件会向被包装组件传入特定属性
// 3). 作用: 扩展组件的功能
// 4). 高阶组件也是高阶函数: 接收一个组件函数, 返回是一个新的组件函数