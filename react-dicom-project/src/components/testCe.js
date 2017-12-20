require('normalize.css/normalize.css');
require('styles/App.css');
// require('styles/bootstrap.css');
import React from 'react';
import ReactDOM from 'react-dom';
import toAction from '../actions/index';
import {connect} from 'react-redux';

let imgYeo=require('../images/yeoman.png');

class AppComponent extends React.Component {

 handleSubmit(){
  var inputValue=ReactDOM.findDOMNode(this.refs.inputValue).value;
  console.log(inputValue);
 }
 onChange(){
   if(this.props.value%2!==0){
     this.props.onAdd();
   }
 }
 delay(){
   setTimeout(this.props.onAdd,1000);
 }
 handleClickTodo=()=>{

   var todoListValue=ReactDOM.findDOMNode(this.refs.todoValue).value;
       if(! todoListValue.trim()){
         return
       }
        console.log(todoListValue);
       todoListValue=" "
     }
  render() {
    let {value,onAdd,onDel}=this.props;
    let node;
    return (
      <div className="index">
        <div className="onIndex">
          <div className="onIndexTop">
           <div className="onIndexLeft"> 影像中心选择 <span>你好，主人</span></div>
           <div className="onIndexSearch"><input type="text" className="search_msg"  ref="inputValue"/>
           <button className="btn btn-default"  onClick={this.handleSubmit.bind(this)}>提交</button></div>
           <div className="imgYeo">
               <img src={imgYeo} width="50px"/>
               <img src={imgYeo}  width="50px"/>
               <img src={imgYeo}  width="50px"/>
               <img src={imgYeo}  width="50px"/>
               <img src={imgYeo}  width="50px"/>
           </div>
        </div>

        <ul className="checkListAll">
         <ul className="cheakList">
            <li><input type="radio" name="checkTime"/>检查列表</li>
            <li><input type="radio"name="checkTime"/>今天</li>
            <li><input type="radio"name="checkTime"/>昨天</li>
            <li><input type="radio"name="checkTime"/>三天内</li>
            <li><input type="radio"name="checkTime"/>一周</li>
            <li><input type="radio"name="checkTime"/>日期</li>
          </ul>
          <ul className="cheakList">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
          </ul>
        </ul>
        </div>
          点击{value}次
          <button onClick={this.props.onAdd}>+</button>
          <button onClick={onDel}>-</button>
          <button onClick={this.onChange.bind(this)}>jishubianoushu</button>
          <button onClick={this.delay.bind(this)}>yanshijiayi</button>
          <div>
            <form onSubmit={e=>e.preventDefault()}>
                <input type="text" ref="todoValue"/>
                <button onClick={this.handleClickTodo.bind(this)}>添加</button>
            </form>
          </div>
      </div>
    );
  }
}

AppComponent=connect()(AppComponent);
AppComponent.defaultProps = {

};

export default AppComponent;
