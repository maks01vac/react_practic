import React from 'react';
import './AddTodoButton.css'

const AddTodoButton = ({...props}) => {
    return (
        <button className='AddTodoButton' {...props}>
            <p>+</p>
        </button>
    );
};

export default AddTodoButton;