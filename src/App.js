import './App.css';
import AddToDo from './components/AddTodo/AddToDo';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import AddTodoButton from './components/AddTodoButton/AddTodoButton';
import { useState } from 'react';
import MyModal from './components/UI/MyModal/MyModal';
import TodoForm from './components/TodoForm/TodoForm';

function App() {

  const date = new Date()

  const defTodos = [
    {
      id: 1,
      task: 'Сделать 3',
      time: date.getMonth() + '.' + date.getDate() + " " + date.getHours() + ':' + date.getMinutes(),
      isComplited: false
    },
    {
      id: 2,
      task: 'Сделать 2',
      time: date.getMonth() + '.' + date.getDate() + " " + date.getHours() + ':' + date.getMinutes(),
      isComplited: false
    },
    {
      id: 3,
      task: 'Сделать 3',
      time: date.getMonth() + '.' + date.getDate() + " " + date.getHours() + ':' + date.getMinutes(),
      isComplited: false
    },
    {
      id: 6,
      task: 'Сделать 3',
      time: date.getMonth() + '.' + date.getDate() + " " + date.getHours() + ':' + date.getMinutes(),
      isComplited: false
    },
    {
      id: 4,
      task: 'Сделать 3',
      time: date.getMonth() + '.' + date.getDate() + " " + date.getHours() + ':' + date.getMinutes(),
      isComplited: false
    },
    {
      id: 5,
      task: 'Сделать 3',
      time: date.getMonth() + '.' + date.getDate() + " " + date.getHours() + ':' + date.getMinutes(),
      isComplited: false
    }
  ]



  const [todos, setTodos] = useState(defTodos)
  const [modalVisible, setModalVisible] = useState(false)

  const removeTodo = (id) => {
    const copy = [...todos]
    const filterTodos = copy.filter( todo => todo.id !== id)
    setTodos(filterTodos)
  }

  const changeTodo = id => {
    const copy = [...todos]
    const current = copy.find(todo => todo.id === id)
    current.isComplited = !current.isComplited
    setTodos(copy)
  }
  
  const createTodo = (newTodo) =>{
    setTodos([...todos, newTodo])
    setModalVisible(false)
  }

  return (
    <div className="App">
      <MyModal visible={modalVisible} setVisible={setModalVisible}>
        <TodoForm create={createTodo}/>
      </MyModal>
      <Header />
      <AddToDo />
      <TodoList todos={todos} changeTodo={changeTodo} removeTodo={removeTodo}/>
      <AddTodoButton onClick={() => setModalVisible(true)} />
    </div>
  );
}

export default App;
