export default function ruducer(state,action) {
    switch(action.type){
        case 'INCREMENT':
            return {...state,counter:{count:state.counter.count+1}}
        case 'DECREMENT':
            return {...state,counter:{count:state.counter.count-1}}
        default:
            return state;
    }
} 