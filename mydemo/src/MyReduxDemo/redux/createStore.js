export default function createStore(reducer,params,rewriteCreateStoreFunc) {

    if(rewriteCreateStoreFunc){
        const newCreateStore=rewriteCreateStoreFunc(createStore);
        return newCreateStore(reducer,params);
    }

    let state=params;
    let listeners=[];

    /* 订阅 */
    function subscribe(params) {
        listeners.push(params);
        return function unsubscribe() {
            const index=listeners.indexOf(params);
            listeners.splice(index,1);
        }
    }

    /* Demo1：通知 */
    function changeState(params) {
        state=params;
        for(let i=0;i<listeners.length;i++){
            const listener=listeners[i];
            listener();
        }
    }

    /* Demo2:通过reducer约束，更新数据 */
    function dispatch(action){
        console.log(state);
        state=reducer(state,action);
        console.log(state);
        for(let i=0;i<listeners.length;i++){
            const listener=listeners[i];
            listener();
        }
    }

    function replaceReducer(newReducer) {
        reducer=newReducer;
        /*刷新一遍 state 的值，新来的 reducer 把自己的默认状态放到 state 树上去*/
        dispatch({type:Symbol()});
    }

    /* 注意！！！只修改了这里，用一个不匹配任何计划的 type，来获取初始值 */
    dispatch({type:Symbol()})

    function getState() {
        return state;
    }

    return{
        subscribe,
        changeState,
        dispatch,
        getState,
        replaceReducer,
    }
}