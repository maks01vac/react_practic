import React from 'react';
import TodoItems from '../TodoItems/TodoItems';

const TodoList = ({todos, changeTodo, removeTodo}) => {
    return (
        <div>
            {todos.map(todo => <TodoItems key={todo.id} removeTodo={removeTodo} changeTodo={changeTodo} todo={todo}/>)

            }
        </div>
    );
};

export default TodoList;