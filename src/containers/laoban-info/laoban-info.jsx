//老板信息完善路由组件
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {NavBar,InputItem,TextareaItem,Button} from 'antd-mobile'
import HeaderSelector from '../../components/header-selector/header-selector'

class LaobanInfo extends Component{
    state={
        header:'',
        post:'',
        info:'',
        company:'',
        salary:'',
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
                <NavBar>老板完善信息</NavBar>
                <HeaderSelector setHeader={this.setHeader}></HeaderSelector>
                <InputItem placeholder='' onChange={val=>{this.handleChange('post',val)}}>招聘职位：</InputItem>
                <InputItem placeholder='' onChange={val=>{this.handleChange('company',val)}}>公司职位：</InputItem>
                <InputItem placeholder='' onChange={val=>{this.handleChange('salary',val)}}>职位薪资：</InputItem>
                <TextareaItem title='职位要求' rows={3} onChange={val=>{this.handleChange('info',val)}}/>
                <Button type='primary' onClick={this.save}>保&nbsp;&nbsp;&nbsp;存</Button>
            </div>
        )
    }
}
export default connect(
    state =>({}),
    {}
)(LaobanInfo)
