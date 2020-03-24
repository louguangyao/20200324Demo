const exceptionMware=(store)=>(next)=>(action)=>{
    try{
        next(action);
    }
    catch(exc){
        console.log("异常信息：",exc);
    }
}

export default exceptionMware;