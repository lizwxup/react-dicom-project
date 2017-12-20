
import {combineReducers} from 'redux'
const todos=(state=[],action)=>{
    switch (action.type) {
      case "ADD_TODO":
          return [
            ...state,
            {
              id:action.id,
              text:action.text,
              completed:false
            }
          ]
        break;
    case "TOGGLE_TODO":
          return state.map(todo=>
            (todo.id===action.id)?{...todo,completed:!action.completed}
            :todo)
        break;
    default:
        return state;
    }
}
const visibilityFilter=(state='SHOW_ALL',action)=>{
    switch (action.type) {
       case "SET_VISITIBILITY_FILTER":
            return action.filter;
        break;
    default:
        return state;
    }
}
const todoApp=combineReducers({
  todos,
  visibilityFilter
});

export default todoApp;
