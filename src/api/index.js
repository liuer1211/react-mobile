/**
 * 包含多个请求接口的函数模块
 * 返回promise
 */
import ajax from './ajax'

//注册接口
export const reqRegister =(user) => ajax('/register',user,'POST')
//登录接口
export const reqLogin=({username,password})=>ajax('/login',{username,password},'POST')
//更新用户信息
export const reqUpdateUser=(user)=> ajax('/update',user,'POST')


