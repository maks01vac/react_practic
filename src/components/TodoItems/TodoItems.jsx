import React from 'react';
import CheckBox from '../UI/CheckBox/CheckBox'
import './TodoItems.css'
import cn from 'classnames'
import { BsFillTrashFill } from 'react-icons/bs';

const TodoItems = ({todo, changeTodo, removeTodo}) => {
    return (
        <div className='TodoItems'>
            <CheckBox onClick={() => changeTodo(todo.id)} isComplited={todo.isComplited}/>
            <div className={cn('TodoItem_Desc',{
                'TodoItems_active':todo.isComplited,
            } )}>
                <div>{todo.task}</div>
                <div>{todo.time}</div>
            </div>
            <div className='trash_box'>
                <BsFillTrashFill className='trash' size={32} onClick={() => removeTodo(todo.id)}/>
            </div>
            
        </div>
    );
};

export default TodoItems;