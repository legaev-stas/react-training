import React from 'react';
import './checkbox.css';

const Checkbox = ({children, id, checked, onClick}) => (
    <div className="css-checkbox">
        <input
            type="checkbox"
            id={id}
            checked={checked}
            onChange={onClick}
        />
        <label htmlFor={id}>{children}</label>
    </div>
)

export default Checkbox;