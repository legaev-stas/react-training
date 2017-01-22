import React from 'react';
import InputGroup from '../forms/input-group';
import Button from '../forms/button';
import Task from '../task-item';

const TasksContainer = ({params, collection, newTaskTitle, setNewTaskTitleValue, addTask, toggleTaskStatus}) => (
    <div>
        <div className="heading">
            <InputGroup type="text" placeholder="Add item" onChange={setNewTaskTitleValue} value={newTaskTitle}/>
            <Button onClick={() => addTask(params.activeCategoryId, newTaskTitle)}>Add</Button>
        </div>
        <div>
            {collection.map((props) => <Task
                key={props.id}
                {...props}
                onChangeStatus={toggleTaskStatus}
            />)}
        </div>
    </div>
);

export default TasksContainer;