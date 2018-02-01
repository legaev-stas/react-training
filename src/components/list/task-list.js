import React from 'react';
import {List} from '../../components/list';


export const TaskList = ({collection, editableTask, deleteTask, onStatusChange}) => (
    <List
        checkable
        arrow
        collection={collection}
        onClick={editableTask}
        onDelete={deleteTask}
        onStatusChange={onStatusChange}
    />
);
