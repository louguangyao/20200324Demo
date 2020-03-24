const applyMiddleWare=function(...middleWares) {
    return function (oldCreateStore) {
        return function newCreateStore(reducer,initState) {
            //1:生成store
            const store=oldCreateStore(reducer,initState);
            //2:给每个middleWare传下store，相当于logger=loggerMWare(store)
            const chain=middleWares.map(mWare=>mWare(store));

            let dispatch=store.dispatch;
           
            chain.reverse().map(mWares=>{
                dispatch=mWares(dispatch);
            });
            store.dispatch=dispatch;
            return store;
        }
    }
}

export default applyMiddleWare;