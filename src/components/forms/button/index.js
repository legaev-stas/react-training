import React from 'react';
import './button.css';

const Button = ({children, onClick}) => (
    <button onClick={onClick}>{children}</button>
);

export default Button;