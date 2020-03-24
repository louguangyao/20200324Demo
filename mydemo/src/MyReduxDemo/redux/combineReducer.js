export default function combineReducer(reducers) {
    /* reducerKeys = ['counter', 'info'] */
    const reducerKey=Object.keys(reducers);

    //合并后返回新的 reducer函数，func=【state=state.func('action')】
    return function combination(state={},action) {
        const nextState={};
        //遍历执行所有的reducer,整合成为一个新的state
        for(let i=0;i<reducerKey.length;i++){
            const key=reducerKey[i];
            const reducer=reducers[key];

            //原值
            const previousStateForKey=state[key];
            //执行分 reducer,获得新的state
            const nextStateForKey=reducer(previousStateForKey,action);

            nextState[key]=nextStateForKey;
        }
        return nextState;
    }
}