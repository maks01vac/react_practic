import './App.css';
import AddToDo from './components/AddTodo/AddToDo';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import AddTodoButton from './components/AddTodoButton/AddTodoButton';
import { useState } from 'react';

function App() {

  const date = new Date()

  const defTodos = [
    {
      id:1,
      task:'Сделать 3',
      time:date.getMonth() + '.' + date.getDate() + " " + date.getHours() + ':' + date.getMinutes(),
      isComplited:false
    },
    {
      id:2,
      task:'Сделать 2',
      time:date.getMonth() + '.' + date.getDate() + " " + date.getHours() + ':' + date.getMinutes(),
      isComplited:false
    },
    {
      id:3,
      task:'Сделать 3',
      time:date.getMonth() + '.' + date.getDate() + " " + date.getHours() + ':' + date.getMinutes(),
      isComplited:false
    },
    {
      id:6,
      task:'Сделать 3',
      time:date.getMonth() + '.' + date.getDate() + " " + date.getHours() + ':' + date.getMinutes(),
      isComplited:false
    },
    {
      id:4,
      task:'Сделать 3',
      time:date.getMonth() + '.' + date.getDate() + " " + date.getHours() + ':' + date.getMinutes(),
      isComplited:false
    },
    {
      id:5,
      task:'Сделать 3',
      time:date.getMonth() + '.' + date.getDate() + " " + date.getHours() + ':' + date.getMinutes(),
      isComplited:false
    }
  ]

 

  const [todos, setTodos] = useState(defTodos)

 const changeTodo = id =>{
    const copy = [...todos]
    const current = copy.find(todo => todo.id === id)
    current.isComplited = !current.isComplited
    setTodos(copy)
  }

  return (
    <div className="App">
      <Header/>
      <AddToDo/>
      <TodoList todos={todos} changeTodo={changeTodo}/>
      <AddTodoButton/>
    </div>
  );
}

export default App;
