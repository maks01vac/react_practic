import React from 'react';
import TodoItems from '../TodoItems/TodoItems';

const TodoList = ({todos, changeTodo}) => {
    return (
        <div>
            {todos.map(todo => <TodoItems key={todo.id} changeTodo={changeTodo} todo={todo}/>)

            }
        </div>
    );
};

export default TodoList;