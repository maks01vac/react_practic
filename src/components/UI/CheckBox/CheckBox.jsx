import React from 'react';
import { BsCheck } from 'react-icons/bs'
import './CheckBox.css'
import cn from 'classnames'

const CheckBox = ({ isComplited }) => {
    return (
        <button className={cn('checkBox', {
            'checkBoxActive': isComplited,
        })}>
            {isComplited &&
                <BsCheck size={35} />
            }
        </button>
    );
};

export default CheckBox;