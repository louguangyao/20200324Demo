import {connect} from 'react-redux'
import {toggleTodo} from '../action'
import TodoList from '../components/TodoList'

const getVisibleTodos=(todos,filter)=>{
    switch(filter){
        case '':
            return todos.filter(t=>t.completed)
        case '':
            return todos.filter(t=>!t.completed)
        case '':
        default:
            return todos
    }
}

const mapStateToProps=state=>{
    return {
        todos:getVisibleTodos(state.todos,state.visibilityFilter)
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        onTodoClick:id=>{
            dispatch(toggleTodo(id))
        }
    }
}

const VisibleTodoList=connect(mapStateToProps,mapDispatchToProps)(TodoList)

export default VisibleTodoList