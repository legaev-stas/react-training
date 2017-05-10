import React from 'react';
import {Link} from 'react-router';
import './task-edit.css';
import Checkbox from '../forms/checkbox';
import Button from '../forms/button';
import Input from '../forms/input';
import Textarea from '../forms/textarea';

export const TaskEdit = ({params, title, done, description, onChangeTitle, onChangeDescription, onToggleStatus, onSave}) => (
    <div className="task-edit">
        <div className="cf">
            <div className="task-edit-buttons">
                <Button onClick={onSave}>Save Changes</Button>
                <Link to={'/' + params.activeCategoryId}>
                    <Button>Cancel</Button>
                </Link>
            </div>
        </div>

        <div className="task-edit-title">
            <Input
                value={title}
                onChange={onChangeTitle}
            />
        </div>

        <div className="task-edit-checkbox">
            <Checkbox
                checked={done}
                onChange={onToggleStatus}
            >Done</Checkbox>
        </div>

        <div className="task-edit-textarea">
            <Textarea
                value={description}
                onChange={onChangeDescription}
            />
        </div>
    </div>
);
