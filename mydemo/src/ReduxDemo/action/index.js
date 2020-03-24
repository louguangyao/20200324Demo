let nextToDoId=0

//action 类型
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

//其他的常量
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
  }

export const addTodo=text=>{
    return {
        type:ADD_TODO,
        id:nextToDoId++,
        text
    }
}

export const setVisibilityFilter=filter=>{
    return {
        type:SET_VISIBILITY_FILTER,
        filter
    }
}

export const toggleTodo=id=>{
    return{
        type:TOGGLE_TODO,
        id
    }
}