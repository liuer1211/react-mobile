/*
* 包含多个action creator
* 异步action
* 同步action
* */
import {AUTH_SUCCESS,ERROR_MSG} from './action-types'
import {reqRegister,reqLogin} from "../api";

//授权成功的同步action
const authSuccess=(user) => ({type:AUTH_SUCCESS,data:user})
//错误提示信息
const errorMsg=(msg) => ({type:ERROR_MSG,data:msg})
// const errorMsg=(msg) => ({type:ERROR_MSG,msg})

//注册的异步action
export const register = (user) =>{
    //传递的值
    const {username,password,password2,type}=user
    //验证
    if(!username){
        return errorMsg('username不能为空')
    } else if(!password){
        return errorMsg('password不能为空')
    } else if(password!==password2){
        // {data: "2次密码要一致"
        // type: "error_msg"}
        return errorMsg('2次密码要一致')
    }
    //合法
    return async dispatch =>{
        //验证
        // if(password!==password2){
        //     dispatch
        // }
        //发送注册异步的请求
        const response=await reqRegister({username,password,type})
        const result=response.data
        //后台传来的数据
        if (result.code===0){//{code:0/1,data:user,msg:''}
            //分发成功的同步action  返回数据
            dispatch(authSuccess(result.data))
        } else{
            //分发失败的同步信息action
            dispatch(errorMsg(result.msg))
        }
    }
}

//登录的异步action
export const login = (user) =>{
    //传递的值
    const {username,password}=user
    //验证
    if(!username){
        return errorMsg('username不能为空')
    }else if(!password){
        return errorMsg('password不能为空')
    }
    return async dispatch =>{
        //发送登录异步的请求
        const response=await reqLogin(user)
        // 接口返回值，处理
        const result=response.data
        if (result.code===0){//{code:0/1,data:user,msg:''}
            //分发成功的同步action
            dispatch(authSuccess(result.data))
        } else{
            //分发失败的同步信息action
            dispatch(errorMsg(result.msg))
        }
    }
}
