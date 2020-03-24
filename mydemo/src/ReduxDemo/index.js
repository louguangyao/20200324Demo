import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import todoApp from './reducers'
import App from './components/App'

/*
action:是把数据从应用传入store的有效载荷。type表示要执行的操作，字符串类型。
reducers:指定了应用状态变化，如何响应Action并发送状态到store
component:展示组件
    TodoList:用于显示Todo列表 
    Todo:一个todo项。text：显示文本内容；complelted：是否显示删除线；onClick：当todo被点击时调用的回调函数
    Link：带有callback回调功能连接
    Footer：允许用户改变可见todo过滤组件
    App：根组件
container：容器组件
    VisibleTodoList：根据当前显示的状态来对 todo 列表进行过滤，并渲染 TodoList
    FilterLink：得到当前过滤器并渲染 Link
    AddTodo：含有“Add”按钮的输入框   （有时很难分清到底该使用容器组件还是展示组件。先混合着用）
    
*/
const Demo2=()=>{

    let store=createStore(todoApp)

    // const unsubscribe = store.subscribe(() =>
    //     console.log(store.getState())
    // )
  
    // // 发起一系列 action
    // store.dispatch(addTodo('Learn about actions'))
    // store.dispatch(addTodo('Learn about reducers'))
    // store.dispatch(addTodo('Learn about store'))
    // store.dispatch(toggleTodo(0))
    // store.dispatch(toggleTodo(1))
    // store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
    
    // // 停止监听 state 更新
    // unsubscribe();

    return(
        <Provider store={store}>
            <App></App>
        </Provider>
    )
}

export default Demo2