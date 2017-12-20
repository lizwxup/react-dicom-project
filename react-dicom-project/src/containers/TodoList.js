


import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleTodo } from '../actions/index';
// import { todos,visibilityFilter} from '../reducers/todoList';

const getVisibleTodos  =(todos,filter)=>{
  switch(filter){
    case 'SHOW_ALL':
          return todos;
    case 'SHOW_ACTIVE':
          return todos.filter(t=>!t.completed);
    case 'SHOW_COMPLETED':
          return todos.filter(t=>t.completed);
    default:
         throw new Error ("未知的"+filter);
  }
}
//mapStateToProps 中有两个参数  state是整个应用的state ownProps是自己的属性
const mapStateToProps = (state)=>({
  todos:getVisibleTodos(state.todos,state.visibilityFilter)
})
// store 自带的几个方法把dispatch方法传递到属性里边
// 展示组件时没有办法拿到dispatch 和store里面的东西
// 只有通过属性（mapStateToProps mapDispatchToProps）的方法传递给组件才可以
//  dispatch 是把action传递给store 判断传递的action的内容是什么 state 判断type执行的是哪一个
const mapDispatchToProps={
    onTodoClick:toggleTodo
}
//将容器组件的状态 属性 传递到展示组件（TodoList）
const VisibleTodoList=connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList;
