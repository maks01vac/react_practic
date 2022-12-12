import React from 'react';
import Classes from './Button.module.css'

const Button = ({children, ...props}) => {
    return (
        <button className={Classes.myBtn} {...props}>
            {children}
        </button>
    );
};

export default Button;