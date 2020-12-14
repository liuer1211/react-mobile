/*
* 包含多个reducer函数：根据老的state和指定的action返回一个新的state
* */
import {combineReducers} from 'redux'
import {AUTH_SUCCESS,ERROR_MSG,GOODS_INFO} from './action-types'

import {getRedirectTo} from '../utils'

const initUser={
    username:'',
    type:'',
    msg:'',//错误提示信息
    redirectTo:'',//自动重定向的路径
}

const goodsInit={}

//user状态的reducer
function user(state=initUser,action) {
    console.log('action=',action) // 类型名称  参数
    switch (action.type) {
        case AUTH_SUCCESS://data:user
            const {type,header}=action.data
          // { data:{ header: "头像7"
          //   info: "123"
          //   post: "123"
          //   type: "dashen"
          //   username: "123"
          //   _id: "5f35f0736baba61e08d69048"}
          //   type: "auth_success"}
            // return {...state,...action.data}//原来的state不要了
            // reducers.js:23 path= /dashen
            console.log('path=',getRedirectTo(type,header))
            console.log({...action.data,redirectTo:getRedirectTo(type,header)})
            // {header: "头像7"
            // info: "123"
            // post: "123"
            // redirectTo: "/dashen"
            // type: "dashen"
            // username: "123"
            // _id: "5f35f0736baba61e08d69048"}
            return {...action.data,redirectTo:getRedirectTo(type,header)}
        case ERROR_MSG://data:msg
            // {data: "2次密码要一致"
            // type: "error_msg"}
            console.log({...state,msg:action.data})
            // {msg: "password不能为空"
            // redirectTo: ""
            // type: ""
            // username: ""}
            // 只改了指定参数，又拼成一个对象
            return {...state,msg:action.data}
        default:
            return state
    }
}

// goods
function goods(state=goodsInit,action) {
    console.log('action=',action) // 类型名称  参数
    switch (action.type) {
        case GOODS_INFO:
            return action.data
        default:
            return state
    }
}

export default combineReducers({
    user,
    goods
})

//向外暴露的状态结构：｛xxx:0,yyy:0｝


