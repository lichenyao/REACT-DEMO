import React from 'react';
import { connect } from 'react-redux'
import { addGun, removeGun, addGunAsync } from './index.redux';

@connect(
    // 你要 state 什么属性放到 props 里
    state=>({num:state}),
    // 你要什么方法，放到props里 自动dispatch
    { addGun, removeGun, addGunAsync }
)
class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        // const store = this.props.store
        // const num = store.getState()
        const num = this.props.num
        const addGun = this.props.addGun
        const removeGun = this.props.removeGun
        const addGunAsync = this.props.addGunAsync
        return (
            <div>
                <h2>现在有机枪{num}把</h2>
                <button onClick={addGun}>申请武器</button>
                <button onClick={removeGun}>上缴武器</button>
                <button onClick={addGunAsync}>上缴武器</button>
            </div>
        )
    }
}

// const mapStatetoProps = (state) => {
//     return { num: state }
// }
// const actionCreators = { addGun, removeGun, addGunAsync }
// App = connect(mapStatetoProps, actionCreators)(App)

export default App