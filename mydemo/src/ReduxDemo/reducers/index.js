import todos from './todos'
import visibilityFilter from './visibilityFilter'
import {combineReducers} from 'redux'

const todoAPP=combineReducers({
    todos,visibilityFilter
})

export default todoAPP