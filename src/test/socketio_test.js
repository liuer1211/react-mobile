//引入客户端io
import io from 'socket.io-client'

//连接服务器，得到代表链接的socket对象
const socket=io('ws://localhost:4000')
//向服务器发送消息
socket.emit('sendMsg',{name:'Tom'})
console.log('浏览器想服务端发送消息：',{name:'tom'})
//绑定receiveMessage的监听
socket.on('receiveMsg',function (data) {
    console.log('浏览器接收到的消息：',data)
})

