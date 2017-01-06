import React from 'react';
import './task-item.css';
import Checkbox from '../forms/checkbox'

const TaskItem = ({id, title, description, done, onChangeStatus}) => (
    <div className="task">
        <Checkbox
            checked={done}
            onChange={() => onChangeStatus(id)}
        />
        {title}
    </div>
);

export default TaskItem;