/*
* 包含多个reducer函数：根据老的state和指定的action返回一个新的state
* */
import {combineReducers} from 'redux'
import {AUTH_SUCCESS,ERROR_MSG} from './action-types'

import {getRedirectTo} from '../utils'

const initUser={
    username:'',
    type:'',
    msg:'',//错误提示信息
    redirectTo:'',//自动重定向的路径
}

//user状态的reducer
function user(state=initUser,action) {
    console.log('action=',action)
    switch (action.type) {
        case AUTH_SUCCESS://data:user
            const {type,header}=action.data
            // return {...state,...action.data}//原来的state不要了
            console.log('path=',getRedirectTo(type,header))
            return {...action.data,redirectTo:getRedirectTo(type,header)}
        case ERROR_MSG://data:msg
            return {...state,msg:action.data}
        default:
            return state
    }
}

export default combineReducers({
    user
})

//向外暴露的状态结构：｛xxx:0,yyy:0｝


