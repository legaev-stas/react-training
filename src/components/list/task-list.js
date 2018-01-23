import React from 'react';
import {List} from '../../components/list';


export const TaskList = ({collection, editTask, deleteTask, onStatusChange}) => (
    <List
        checkable
        arrow
        collection={collection}
        onClick={editTask}
        onDelete={deleteTask}
        onStatusChange={onStatusChange}
    />
);
