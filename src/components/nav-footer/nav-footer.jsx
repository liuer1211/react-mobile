import React, {Component} from 'react'
import {TabBar} from 'antd-mobile'

import {withRouter} from 'react-router-dom'

const Item = TabBar.Item

class NavFooter extends Component{

    render() {
        let list=[
            {
                path:'',
                text:'大神',
                icon:'dashen'
            },
            {
                path:'',
                text:'老板',
                icon:'dashen-selected'
            }
        ]
        return (
            <TabBar>
                {
                    list.map((nav)=>(
                        <Item
                            // key={nav.path}
                            title={nav.text}
                            icon={{uri:require(`./images/${nav.icon}.png`)}}
                            // selectedIcon={{uri: require(`./images/${nav.icon}-selected.png`)}}
                            // selected={path===nav.path}
                        />
                    ))
                }
            </TabBar>
        )
    }
}
// 向外暴露withRouter()包装产生的组件
// 内部会向组件中传入一些路由组件特有的属性: history/location/math
export default withRouter(NavFooter)