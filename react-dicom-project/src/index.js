import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import Reducer from './reducers/index';

import todoApp from './reducers/todoList.js';
import { createStore,applyMiddleware } from 'redux';


import {Provider} from 'react-redux';
import logger from 'redux-logger';
//异步操作的中间件  改造了dispatch 函数 使他可以接受一个函数
import thunk from 'redux-thunk';
let store=createStore(Reducer);
let toDoStore=createStore(todoApp,applyMiddleware(logger,thunk));
//Render the main component into the dom
//Provider 是一个组件 可以把这个组件的方法直接传递给子组件 并且子组件只有一个
//connect  作用是把展示组件的属性传递到容器组件中
// var render=()=>ReactDOM.render( <Provider store={store}>
//   <App
//     value={store.getState()}
//     onAdd={()=>store.dispatch({type:"ADD"})}
//     onDel={()=>store.dispatch({type:"DEL"})}/>

//   </Provider>, document.getElementById('app'));
//var render=()=>ReactDOM.render(<AppTodo/>, document.getElementById('app'));
// render();
//store.subscribe(render);
ReactDOM.render( <Provider store={store}>
    <App/></Provider>, document.getElementById('app'));