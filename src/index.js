// 入口js
import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter,Route,Switch} from 'react-router-dom'
import {Provider} from 'react-redux'

import store from './redux/store'

import Register from './containers/register/register'
import Login from './containers/login/login'
import Main from './containers/main/main'
// import Model from './containers/model/model'

import './mock/mockServer' // 加载mockServer即可

import './assets/css/index.less'
//35

// import './test/socketio_test'

ReactDOM.render((
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path='/register' component={Register}/>
                <Route path='/login' component={Login}/>
                {/*默认组件*/}
                <Route component={Main}></Route>
                {/*练习组件，将上面路由注释，查看*/}
                {/*<Route path='/model' component={Model}/>*/}
            </Switch>
        </HashRouter>
    </Provider>
),document.getElementById('root'))
