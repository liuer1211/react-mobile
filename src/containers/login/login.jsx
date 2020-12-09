// 注册路由
import React,{Component} from 'react'
import {NavBar,WingBlank,List,InputItem,WhiteSpace,Button} from 'antd-mobile'
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
                {/*logo*/}
                <Logo name={"fromLogin"}/>
                {/*列好*/}
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

export default connect(
    state =>({user:state.user}), //后台数据
    {login}                   //登录异步
)(Login)
