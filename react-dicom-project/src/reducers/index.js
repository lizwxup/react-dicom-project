// export default (state=100,action)=>{
//   switch(action.type){
//       case "ADD":
//           return state+1;
//       case "DEL" :
//           return state-1;
//       default:
//           return state;
//   }
// }

import {combineReducers} from 'redux'
// const todos=(state=[],action)=>{
//     switch (action.type) {
//       case "ADD_TODO":
//           return [
//             ...state,
//             {
//               id:action.id,
//               text:action.text,
//               completed:false
//             }
//           ]
//         break;
//     case "TOGGLE_TODO":
//           return state.map(todo=>
//             (todo.id===action.id)?{...todo,completed:!todo.completed}
//             :todo)
//         break;
//     default:
//         return state;
//     }
// }
//用 reducers 处理你刚才定义的内容  也就是更新操作
function todos(state=[],action){
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
               (todo.id===action.id)?{...todo,completed:!todo.completed}
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
