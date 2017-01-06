import React from 'react';
import './checkbox.css';

const Checkbox = ({children, id, checked, onChange}) => (
    <div className="checkbox-wrapper">
        <label>
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
            {children}
        </label>
    </div>
)

export default Checkbox;