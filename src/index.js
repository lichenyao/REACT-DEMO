import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import App from './App'
import { counter, addGun, removeGun, addGunAsync } from './index.redux';

const store = createStore(counter, applyMiddleware(thunk))
// ReactDOM.render(
//     <App></App>,
//     document.getElementById('root')
// )
function ErYing() {
    return <h2>二营  001</h2>
}
function QiBingLian() {
    return <h2>骑兵连  001</h2>
}
const arr = [{ value: '一营', link: '/' }, { value: '二营', link: '/erying' }, { value: '骑兵连', link: '/qibinglian' }]
function render() {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <ul>
                    {arr.map(v => {
                        return <li>
                            <Link to={v.link}>{v.value}</Link>
                        </li>
                    })}
                </ul>
                {/* exact 完全匹配匹配 */}
                <Route path='/' exact component={App}>
                </Route>
                <Route path='/erying' component={ErYing}>
                </Route>
                <Route path='/qibinglian' component={QiBingLian}>
                </Route>
                {/* <App></App> */}
            </BrowserRouter>
        </Provider>,
        // <App store={store} addGun={addGun} removeGun={removeGun} addGunAsync={addGunAsync}></App>,
        document.getElementById('root')
    )
}
render()

//点击不生效的原因是在 index.js 中没有订阅 store 的变化（subscribe）
store.subscribe(render)

/**
 * 处理异步，调试工具，更优雅的和 react 结合
 * Redux 处理异步，需要 redux-thunk 插件
 * npm install redux-devtool-extension 并且开启(调试工具)
 * 使用 react-redux 优雅的链接 react 和 redux
 *
 * Redux 默认只处理同步，异步任务需要react-thunk中间件
 * 使用applyMiddleware开启thunk中间件
 * Action 可以返回函数，使用dispatch 提交 action （之前只能传递对象）354846097438731 075583767777
 */

/**
 * react-redux
 * 忘记 subscribe ，记住reducer， action 和 dispatch
 * React-redux 提供 Provider 和 connect 两个接口来链接
 * Provider 组件在应用的最外层 传入 store 即可，只用一次
 * Connect 负责从外部获取组件需要的参数 (装饰器)
 */