import React from 'react'
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom'
import App from './App'

const arr = [{ value: '一营', link: '/dashboard/' }, { value: '二营', link: '/dashboard/erying' }, { value: '骑兵连', link: '/dashboard/qibinglian' }]
function ErYing() {
    return <h2>二营</h2>
}
function QiBingLian() {
    return <h2>骑兵连</h2>
}
class Test extends React.Component {
    // constructor(props){
    //     super(props)
    // }
    render() {
        console.log(this.props);
        return (
            <h2>测试组建 {this.props.match.params.location_test}</h2>
        )
    }
}
class DasHboard extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <ul>
                    {arr.map(v => {
                        return <li key={v.value + Date.now()}>
                            <Link to={v.link}>{v.value}</Link>
                        </li>
                    })}
                </ul>
                {/* <Switch> */}
                {/* 只渲染命中的第一个Route */}
                <Route path='/dashboard/' exact component={App}></Route>
                <Route path='/dashboard/erying' component={ErYing}></Route>
                <Route path='/dashboard/qibinglian' component={QiBingLian}></Route>
                {/* <Route path='/dashboard/:location_test' component={Test}></Route> */}
                {/* </Switch> */}
            </div>
        )
    }
}

export default DasHboard