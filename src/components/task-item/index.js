import React from 'react';
import './task-item.css';
import Checkbox from '../forms/checkbox';
import Icon from '../icon';
import {Link} from 'react-router';

const TaskItem = ({id, category, title, description, done, onChangeStatus}) => (
    <div className="task cf">
        <div className="task-checkbox-wrapper">
            <Checkbox
                checked={done}
                onChange={(e) => onChangeStatus(e, id)}
            />
        </div>
        <div className="task-title">{title}</div>
        <div className="task-icon-wrapper">
            <Link to={'/' + category + '/' + id}>
                <Icon type="edit"/>
            </Link>
        </div>
    </div>
);

export default TaskItem;