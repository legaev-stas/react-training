import React from 'react';
import './input.css';
import Icon from '../../icon';
import Input from '../input';

const InputGroup = ({type, id, value, disabled, placeholder, icon, onChange, onReset}) => (
    <div className="input-holder">
        <Input
            type={type}
            id={id}
            value={value}
            disabled={disabled}
            placeholder={placeholder}
            onChange={onChange}
        />
        {icon && <Icon type={icon} onClick={onReset}/>}
    </div>
);

export default InputGroup;