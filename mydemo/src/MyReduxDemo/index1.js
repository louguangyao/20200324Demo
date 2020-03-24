import {createStore, combineReducer, applyMiddleWare} from './redux';
import reducer from './reducer/reducer';
import counterReducer from './reducer/counterReducer';
import infoReducer from './reducer/infoReducer';

import exceptionMware from './middlewares/exceptionMware';
import loggerMware from './middlewares/loggerMware';
import timeMware from './middlewares/timeMware';
import bindActionCreators from './redux/bindActionCreator';
/**
 * middlewares :中间件，即对dispatch的扩展或者重写
 * reducer:计划函数，即各自更新数据的具体实现。这是是函数方法
 * redux:  -- 框架
 *      createStroe: 创建初始化 store
 *      applyMiddleCreator: 合并 middlewares中间件
 *      combineReducer: 合并reducer 函数
 *      bindActionCreator: 通过闭包，把 dispatch 和 actionCreator 隐藏起来
 */
export default function run(){
    let initState={
        counter:{count:0},
        info:{name:'',desc:''}
    };
    const reducerDemo3=combineReducer({counter:counterReducer,info:infoReducer});

    const rewriteCreateStoreFunc=applyMiddleWare(loggerMware,timeMware,exceptionMware);
    //let store=createStore(reducer,initState);
    //let store=createStore(reducerDemo3,initState);
    //let store=createStore(reducerDemo3);
    const store=createStore(reducerDemo3,{},rewriteCreateStoreFunc);
    //store.replaceReducer(reducerDemo3);

    // const next=store.dispatch;
    // const logger=loggerMware(store);
    // const time=timeMware(store);
    // const exception=exceptionMware(store);
    // store.dispatch=exception(time(logger(next)));

    //注册函数：打印state的info
    store.subscribe(()=>{
        let state=store.getState();
        console.log(`${state.info.name}:${state.info.desc}`);
    });

    //注册函数：打印count
    store.subscribe(()=>{
        let state=store.getState();
        console.log(state.counter.count);
    });

    //Demo1: 更新对象，合并对象
    // store.changeState({
    //     ...store.getState(),
    //     info:{
    //         name:'aaa',
    //         desc:'descaa'
    //     }
    // });

    // store.changeState({
    //     ...store.getState(),
    //     counter:{count:1}
    // });

    //Demo2:
    // store.dispatch({
    //     type:'INCREMENT'
    // });
    // store.dispatch({
    //     type:'INCREMENT'
    // });

    //Demo3:
    store.dispatch(
        {type:'INCREMENT'}
    );
    store.dispatch(
        {type:'Set_Name',name:'demo3Name'}
    );


    //通过闭包，把 dispatch 和 actionCreator 隐藏起来，让其他地方感知不到 redux 的存在
    function setInc(){
        return {type:'INCREMENT'};
    }
    function setName(name) {
        return {type:'Set_Name',name:name};
    }
    const actions=bindActionCreators({setInc,setName},store.dispatch);
    actions.setInc();
    actions.setName('aa');
}
