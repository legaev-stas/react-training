import React, {Component} from 'react';
import globalState from '../../state';
import uuid from 'uuid/v4';
import InputGroup from '../forms/input-group';
import Button from '../forms/button';
import Task from '../task-item';

class TasksContainer extends Component {
    constructor(props) {
        super(props);

        this.state = globalState.get();

        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.addTask = this.addTask.bind(this);
        this.taskFilter = this.taskFilter.bind(this);
    }

    componentDidMount() {
        globalState.onChange(this.setState.bind(this));
    }

    onChangeStatus(id) {
        var taskList = globalState.get().data.taskList;
        taskList.forEach((task) => {
            if(task.id === id) {
                task.done = !task.done;
            }
        })
        globalState.set('data.taskList', taskList);
    }

    setNewTaskTitle(e){
        globalState.set('state.newTaskTitle', e.target.value);
    }

    addTask (){
        var newState = globalState.get();

        if(!newState.state.newTaskTitle){
            return;
        }

        newState.data.taskList.push({
            category: this.props.params.activeCategoryId,
            id: uuid(),
            title: newState.state.newTaskTitle,
            description: '',
            done: false
        });

        newState.state.newTaskTitle = '';

        globalState.set(newState);
    }

    taskFilter(task){
        return task.category === this.props.params.activeCategoryId &&
            (task.done ? this.state.state.filterShowDone : true) &&
            (this.state.state.filterSearch ? task.title.indexOf(this.state.state.filterSearch) !== -1 : true);
    }

    render() {
        return (
            <div>
                <div className="heading">
                    <InputGroup type="text" placeholder="Add item" onChange={this.setNewTaskTitle} value={this.state.state.newTaskTitle}/>
                    <Button onClick={this.addTask}>Add</Button>
                </div>
                <div>
                    {this.state.data.taskList.filter(this.taskFilter).map((props) => <Task
                        key={props.id}
                        {...props}
                        onChangeStatus={this.onChangeStatus}
                    />)}
                </div>
            </div>
        );
    }
}

export default TasksContainer;