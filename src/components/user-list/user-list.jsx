/*
显示指定用户列表的UI组件
 */
import React, {Component} from 'react'
import {WingBlank, WhiteSpace, Card} from 'antd-mobile'
// Card 卡片
import {withRouter} from 'react-router-dom'
import QueueAnim from 'rc-queue-anim'
const Header = Card.Header
const Body = Card.Body

class UserList extends Component {

  render () {

    return (
        <WingBlank style={{marginBottom:50, marginTop:50}}>
        <QueueAnim type='scale'>
              <div>
                <WhiteSpace/>
                <Card>
                  <Header extra={'张三'}/>
                  <Body>
                    <div>职位: web前端</div>
                    <div>公司: 新致</div>
                    <div>描述: html+css+js</div>
                  </Body>
                </Card>
              </div>
        </QueueAnim>
      </WingBlank>
    )
  }
}

export default withRouter(UserList)