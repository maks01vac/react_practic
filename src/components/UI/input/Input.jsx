import React from 'react';
import Classes from './Input.module.css'

const Input = (props) => {
    return (        
        <input className={Classes.myInput} {...props}/>
    );
};

export default Input;