import React from 'react';
import CheckBox from '../UI/CheckBox/CheckBox'
import './TodoItems.css'
import cn from 'classnames'

const TodoItems = ({todo, changeTodo}) => {
    return (
        <div onClick={() => changeTodo(todo.id)} className='TodoItems'>
            <CheckBox isComplited={todo.isComplited}/>
            <div className={cn('TodoItem_Desc',{
                'TodoItems_active':todo.isComplited,
            } )}>
                <div>{todo.task}</div>
                <div>{todo.time}</div>
            </div>
        </div>
    );
};

export default TodoItems;