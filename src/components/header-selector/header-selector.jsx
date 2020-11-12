/**
 * 选择头像的UI组件
 */
import React,{Component} from 'react'
import {List,Grid} from 'antd-mobile'
import PropTypes from 'prop-types'

export default class HeaderSelector extends Component{
    static propTypes={
        setHeader:PropTypes.func.isRequired
    }
    state={
        icon:null
    }
    constructor(props){
        super(props)
        //头像列表数据
        this.headerList=[]
        for(let i=0;i<20;i++){
            this.headerList.push({
                text:'头像'+(i+1),
                icon:require(`./images/头像${i+1}.png`)
            })
        }
    }
    //
    handleClick=({text,icon})=>{
        //更新组件状态
        this.setState({icon})
        //调用函数更新父组件状态
        this.props.setHeader(text)
    }
    //

    render() {
        //头像
        const {icon}=this.state
        const listerHeader= !icon ? '请选择头像' : (
            <div >
                <span > 已选择头像：</span>
                {/*<img src={icon}/>*/}
            </div>
        )

        return(
            <List renderHeader={() => listerHeader}>
               <Grid data={this.headerList} columnNum={5}
                    onClick={this.handleClick}/>
            </List>
        )
    }
}
