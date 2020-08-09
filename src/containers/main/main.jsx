// 注册路由
import React,{Component} from 'react'
import {Switch,Route} from 'react-router-dom'

import LaobanInfo from '../laoban-info/laoban-info'
import DashenInfo from '../dashen-info/dashen-info'

export default class Main extends Component{
    /*
    刚进来，进入这个页面，但是没有默认的，需要判断path是那个；
    注册路由*/
    render() {
        return(
            <div>
                <Switch>
                    <Route path='/laobaninfo' component={LaobanInfo}></Route>
                    <Route path='/dasheninfo' component={DashenInfo}></Route>
                </Switch>
            </div>
        )
    }
}
