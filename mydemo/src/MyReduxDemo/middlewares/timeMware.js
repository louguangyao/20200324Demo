const timeMware=(store)=>(next)=>(action)=>{
    console.log('time:',new Date().toLocaleTimeString());
    next(action);
}

export default timeMware;