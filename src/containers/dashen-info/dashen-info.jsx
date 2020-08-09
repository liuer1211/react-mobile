//大神信息完善路由组件
import React,{Component} from 'react'
import {connect} from 'react-redux'

import {NavBar, InputItem, Button, TextareaItem} from 'antd-mobile'
import HeaderSelector from '../../components/header-selector/header-selector'

class DashenInfo extends Component{
    state={
        header:'',
        post:'',
        info:'',
    }
    //头像更新
    setHeader=(header) =>{
        this.setState({
            header
        })
    }

    //更新值
    handleChange=(name,value)=>{
        this.setState({
            [name]:value
        })
    }
    //保存
    save= ()=>{
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <NavBar>大神完善信息</NavBar>
                <HeaderSelector setHeader={this.setHeader}></HeaderSelector>
                <InputItem placeholder='' onChange={val=>{this.handleChange('post',val)}}>求职岗位：</InputItem>
                <TextareaItem title='人员介绍' rows={3} onChange={val=>{this.handleChange('info',val)}}/>
                <Button type='primary' onClick={this.save}>保&nbsp;&nbsp;&nbsp;存</Button>
            </div>
        )
    }
}
export default connect(
    state =>({}),
    {}
)(DashenInfo)
