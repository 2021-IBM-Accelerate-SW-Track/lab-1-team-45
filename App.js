import React, {useState} from 'react'
import Header from './component/header'
import Todo from './component/todo/todo'
import Todocontent from './component/todocontent/todocontent'

import './App.css';

function App() {
  const [inputText, setInputText]  = useState("");  //Used to interract with input object
  const [todos, setTodo]  = useState([]); //Object to store all elements in list 
   
  return (
    <div className="App">
    <Header/>
    <Todo 
    inputText = {inputText} //Access input text form todo.js
    todos ={todos}  //Access todos from todo.js
    setTodo ={setTodo} //Access setTodo from todo.js
    setInputText = {setInputText} //Access setInputText from todo.js
    
    /> 
    <Todocontent todos = {todos} setTodo ={setTodo} />
    
    </div>
  );
}

export default App;
