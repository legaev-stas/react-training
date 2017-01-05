import React from 'react';

const Input = ({type, id, value, disabled, placeholder, onChange}) => (
    <input
        type={type}
        id={id}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
    />
);

export default Input;