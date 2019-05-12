import React from 'react';
import './error.css';

const Error = ({message}) => {
    return (
        <div className='error'>
            <span>{message}</span>
        </div>
    )
}

export default Error;