import React from 'react'

// import logo from './logo.png'
import './logo.less'

export default class Logo extends React.Component{
    // 判断1
    showMsg() {
        if(this.props.name==='fromLogin') {
            return (
                <div>聊</div>
            )
        } else {
            return (
                <div>天</div>
            )
        }
    }

    render() {
        console.log('this.props',this.props)
        // let {name} = this.props
        return(
            <div className='logo-container'>
                {/*<img src={logo} alt='logo' className='logo-img'/>*/}
                <div className='logo-container-bg tran'>
                    {/*判断2*/}
                    {/*{name ? <div>聊</div> : <div>天</div>}*/}
                    {this.showMsg()}
                </div>
            </div>
        )
    }
}


// React 时，在 render 的return中既然不能使用if判断语句，所以就整理一些在react中使用if 的方式，可根据自己的实际情况选择：
//
// 方式一：
// class LLL extends React.Component {
//     constructor(props){
//         super(props);
//         this.judge = false
//     }
//     render(){
//         let Message
//         if (this.judge) {
//             Message = (
//                 <span>
//                    <h5>It`s my life!</h5>
//                 </span>
//             )
//         } else {
//             Message = (
//                 <h5>I think that's more than just like it!</h5>
//             )
//         }
//         return(
//             <div>
//                 <h4>Wellcom LLL</h4>
//                 {Message}
//             </div>
//         );
//     }
// }
// 方式二：
// class LLL extends React.Component {
//     constructor(props){
//         super(props);
//         this.judge = false
//     }
//
//     Message(){
//         if (this.judge) {
//             return (
//                 <span>
//                    <h5>It`s my life!</h5>
//                 </span>
//             )
//         } else {
//             return (
//                 <h5>I think that's more than just like it!</h5>
//             )
//         }
//     }
//     render(){
//         return(
//             //1
//             <div>
//                 <h4>Wellcom LLL</h4>
//                 {this.Message()}
//             </div>
//         );
//     }
// }
// 方式三：三元运算符
// class LLL extends React.Component {
//     constructor(props){
//         super(props);
//         this.judge = false
//     }
//
//     render(){
//         return(
//             //1
//             <div>
//                 <h4>Wellcom LLL</h4>
//                 {this.judge ? "It`s my life!" : "I think that's more than just like it!"}
//             </div>
//         );
//     }
// }
// 方式四：
// class LLL extends React.Component {
//     constructor(props){
//         super(props);
//         this.judge = false
//     }
//
//     render(){
//         return(
//             //1
//             <div>
//                 <h4>Wellcom LLL</h4>
//                 {
//                     this.judge
//                         ?
//                         <span>
//                         <h5>It`s my life!</h5>
//                     </span>
//                         :
//                         <h5>I think that's more than just like it!</h5>
//                 }
//             </div>
//         );
//     }
// }