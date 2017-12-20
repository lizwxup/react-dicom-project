require('normalize.css/normalize.css');
require('styles/App.css');
// require('styles/bootstrap.css');
import React from 'react';
import ReactDOM from 'react-dom';
import { addTodo } from '../actions/index';
import { connect } from 'react-redux';
import VisibleTodoList from '../containers/TodoList';
import Footer from '../components/Footer';
import {BrowserRouter,Route,Link,NavLink,Prompt } from 'react-router-dom';
 let imgYeo=require('../images/yeoman.png');

let  AppComponent =({dispatch})=>{
let node;
    return (
      <div className="index">
          <div>
            <form onSubmit={e=>e.preventDefault()}>
                <input type="text" ref={text=>{node=text}}/>
                <button onClick={()=>{
                  if(! node.value.trim()){
                    return
                  }
                  dispatch(addTodo(node.value));
                  node.value=" "
                }}>添加</button>
            </form>
          
            <VisibleTodoList/>
            <Footer/>
            
          </div>
          <BrowserRouter>
          <div>
                <ul>
                  <li>
                    <Link to="/">HOME</Link>
                  </li>
                  <li>
                    <Link to="/about/">About</Link>
                  </li>
                  <li>
                    <NavLink to="/topic" activeStyle={{
                      color:'red',
                      fontWeight:'bold'
                    }}>topic</NavLink>
                  </li>
                </ul>
                <hr/>

                <Route  exact path="/" component={home}/>
                <Route  strict path="/about/" component={about}/>
                <Route path="/topic" component={topic}/>
                </div>
          </BrowserRouter>
      </div>
    );
  }
const home=()=>{
  return (
    <div>
      <h2>HOme</h2></div>
  )
}
const about=()=>{
  return (
    <div>
      <h2>about</h2></div>
  )
}
const topic=({match})=>{
  return (
    <div>
      <h2>topic</h2>
      <ul>
        <li>
           <Link to={`${match.url}/rending`}>Rendering with React</Link>
        </li>
        <li>
           <Link to={`${match.url}/components`}>Rendering with React
           <Prompt message="are you sure" when={true}/>
           </Link>
        </li>
        <li>
           <Link to={`${match.url}/rending`}>Rendering with React</Link>
        </li>
      </ul>

      {/*
          strict  :匹配字符 有尾随字符
          exact   :匹配字符  没有尾随字符
          NAvLink :组件可以设置样式
          link ： 组件不可以设置样式
          prompt:  message  离开页面做一些提示  不能再switch中使用       switch 是匹配其中的一个展示
                    Message  function 
                    when  boolean
      */}
      <Route path={`${match.url}/:topicId`} component={Topic}/>
      <Route  exact path={match.url} render={()=>(
          <h3>please select a topic</h3>
      )}/>
      </div>
  )
}
const Topic=({match})=>{

  return(
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  )
}
// AppComponent=connect()(AppComponent);
AppComponent.defaultProps = {

};

export default AppComponent;
