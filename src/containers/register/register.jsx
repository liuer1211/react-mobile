// 注册路由
import React,{Component} from 'react'
import {NavBar,WingBlank,List,InputItem,WhiteSpace,Radio,Button} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {register} from "../../redux/actions";
import Logo from '../../components/logo/logo'

const ListItem=List.Item
export class Register extends Component{
    //数据
    state={
        username:'',
        password:'',
        password2:'',
        type:'laoban',
    }
    //注册方法
    register=() =>{
        console.log("this.props==",this.props)
        // console.log(this)
        this.props.register(this.state) //调用actions中的方法
    }

    //to-login
    toLogin =() =>{
        this.props.history.replace('/login')
    }
    //处理输入数据的改变：更新对应的状态
    handleChange=(name,val)=>{
        //更新状态
        this.setState({
            [name]:val  //属性名不是name，而是name的值
        })
    }

    render() {
        //定义的属性
        const {type}=this.state
        //后台数据
        const {msg,redirectTo}=this.props.user
        //有值重定向
        if(redirectTo){
            return <Redirect to={redirectTo}/>
        }

        return(
            <div>
                <NavBar>聊 &nbsp; 天 &nbsp; 互 &nbsp; 动 </NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        {msg ? <div className='error-msg'>{msg}</div>:null}
                        <InputItem placeholder='name' onChange={val=>{this.handleChange('username',val)}}>name:</InputItem>
                        <WhiteSpace/>
                        <InputItem placeholder='password' type='password' onChange={val=>{this.handleChange('password',val)}}>password:</InputItem>
                        <WhiteSpace/>
                        <InputItem placeholder='password' type='password' onChange={val=>{this.handleChange('password2',val)}}>repwd:</InputItem>
                        <WhiteSpace/>
                        <ListItem>
                            <span>type:</span>&nbsp;&nbsp;&nbsp;
                            <Radio checked={type==='dashen'} onChange={()=>this.handleChange('type','dashen')}>student</Radio>&nbsp;&nbsp;&nbsp;
                            <Radio checked={type==='laoban'} onClick={()=>this.handleChange('type','laoban')}>boos</Radio>
                        </ListItem>
                        <WhiteSpace/>
                        <Button type='primary' onClick={this.register}>Register</Button>
                        <WhiteSpace/>
                        <Button onClick={this.toLogin}>having</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}

export default connect(
    state =>({user:state.user}), //后台数据
    {register}                   //注册异步
)(Register)
