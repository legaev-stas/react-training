import React from 'react';

const Textarea = ({type, id, value, disabled, placeholder, onChange}) => (
    <textarea
        type={type}
        id={id}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
    />
);

export default Textarea;