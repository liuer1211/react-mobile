/*
* 能发送ajax请求的函数
* 函数返回住是promise对象
* */
import axios from 'axios'

export default function ajax(url,data={},type='GET') {
    if(type==='GET'){
        //拼接请求的参数
        // data:{username:tom,password:123}
        //paramStr:username=tom&password=123123
        let paramStr=''
        Object.keys(data).forEach(key=>{
            paramStr+=key+'='+data[key]+'&'
        })
        if(paramStr){
            paramStr=paramStr.substring(0,paramStr.length-1)
        }
        return axios.get(url+'?'+paramStr)
    }else{
        return axios.post(url,data)
    }

}
