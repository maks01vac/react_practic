import React, { useState } from 'react';
import Button from '../UI/button/Button';
import Input from '../UI/input/Input';


const TodoForm = ({ create }) => {

    const [todo, setTodo] = useState({ task: '' })

    const addNewTodo = (Event) => {
        Event.preventDefault()
        const date = new Date()
        let minutes = date.getMinutes()
        if(minutes<10){
            minutes = '0'+ minutes
        }

        const newTodo = {
            ...todo, task: todo.task, id: Date.now(),
            time: date.getMonth() + '.' + date.getDate() + " " + date.getHours() + ':' + minutes
        }
        create(newTodo)

        setTodo({ ...todo, task: '' })
    }

    return (
        <form>
            <Input
                value={todo.task}
                onChange={(e) => setTodo({ ...todo, task: e.target.value })}
                type='text'
                placeholder='Задача'
            />

            <Button onClick={addNewTodo}>Создать Todo</Button>
        </form>
    );
};

export default TodoForm;