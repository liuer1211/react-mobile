//包含多个功能的工具函数模块
/*
*  返回对应的路由路径
*/
export function getRedirectTo(type,header) {
    let path
    //判断用户类型，跳转大神和老板页面
    if(type==='laoban'){
        path='/laoban'
    }else{
        path='/dashen'
    }
    //header 没有头像，先进行完善信息
    if(!header){
        path += 'info'
    }
    return path
}
