import React from 'react';
import InputGroup from '../forms/input-group';
import Button from '../forms/button';
import Task from '../task-item';

export class TaskList extends React.Component {
    constructor(props) {
        super(props);

        this.addTask = this.addTask.bind(this);
    }

    addTask (){
        this.props.addTask(this.props.params.activeCategoryId, this.props.newTaskTitle);
    }

    render() {

        const {collection, newTaskTitle, setNewTaskTitleValue, toggleTaskStatus} = this.props;
        return (
            <div>
                <div className="heading">
                    <InputGroup type="text" placeholder="Add item" onChange={setNewTaskTitleValue} value={newTaskTitle}/>
                    <Button onClick={this.addTask}>Add</Button>
                </div>
                <div>
                    {collection.map((props) => <Task
                        key={props.id}
                        {...props}
                        onChangeStatus={toggleTaskStatus}
                    />)}
                </div>
            </div>
        )
    }
};
