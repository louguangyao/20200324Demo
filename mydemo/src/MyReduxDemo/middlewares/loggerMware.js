const loggerMware=(store)=>(next)=>(action)=>{
    console.log('this store is:',store.getState());
    console.log('action:',action);
    next(action);
    console.log('next state:',store.getState());
}

export default loggerMware;