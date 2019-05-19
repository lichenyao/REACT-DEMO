/**
 * Redux是什么
 * Redux 专注于状态管理，和 react 解耦
 * 单一状态，单向数据流
 * 核心概念：store state action reducer
 */

/**
 * 通过 reducer 新建 store ，随时通过 store.getState 获取状态
 * 需要状态变更，store.dispatch(action) 来修改状态
 * Reducer 函数接受 state 和 action ，返回新的 state ，可以用 store.subscribe监听每次修改
 */

import { createStore } from 'redux'

/**
 * 新建 store
 * 通过 reducer 建立
 * 根据老的 state 和 action 生成新的 state，action是有类型的
 */

function counter(state = 0, action) {
    switch (action.type) {
        case '加机关枪':
            return state + 1
        case '减机关枪':
            return state - 1
        default:
            return 10
    }
}


const store = createStore(counter)

const init = store.getState()
console.log(init);  //10

function listener(){
    const current = store.getState()
    console.log(current);
}
store.subscribe(listener)
store.dispatch({type:'加机关枪'})
store.dispatch({type:'加机关枪'})
store.dispatch({type:'加机关枪'})

/**
 * dispatch 派发事件 传递action
 */
store.dispatch({type:'加机关枪'})
const init2 = store.getState()
console.log(init2);  //11
