let initState={name:'初始name',desc:'初始desc'}

export default function infoReducer(state,action){
    if(!state){
        state=initState;
    }
    switch(action.type){
        case 'Set_Name':
            return {...state,name:action.name}
        case 'Set_Desc':
            return {...state,desc:action.desc}
        default:
            return state;
    }
}