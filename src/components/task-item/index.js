import React from 'react';
import './task-item.css';

const Category = ({id, title, description, done}) => (
    <div className="task">
        {title}
    </div>
);

export default Category;