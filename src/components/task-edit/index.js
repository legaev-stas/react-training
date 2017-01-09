import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';
import './task-edit.css';
import Checkbox from '../forms/checkbox';
import Button from '../forms/button';
import Input from '../forms/input';
import Textarea from '../forms/textarea';
import globalState from '../../state';

class TaskEdit extends Component {
    constructor(props) {
        super(props);

        this.state = globalState.get();

        this.setState = this.setState.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDone = this.onChangeDone.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
    }

    componentDidMount(){
        globalState.onChange(this.setState);
        globalState.set('state.editTask', globalState.get().data.taskList.filter((task) => task.id === this.props.params.editTaskId)[0]);
    }

    componentWillUnmount(){
        globalState.offChange(this.setState);
    }

    onSave() {
        var editTask = globalState.get().state.editTask;
        var taskList = globalState.get().data.taskList;

        var updatedTaskList = taskList.map((task) => {
            if(task.id === editTask.id){
                return editTask;
            }
            return task;
        });

        globalState.set('data.taskList', updatedTaskList);
        browserHistory.push('/' + this.props.params.activeCategoryId);
    }

    onChangeTitle(e) {
        globalState.set('state.editTask.title', e.target.value);
    }

    onChangeDone(e) {
        globalState.set('state.editTask.done', e.target.checked);
    }

    onChangeDescription(e) {
        globalState.set('state.editTask.description', e.target.value);
    }

    render() {
        return (
            <div className="task-edit">
                <div className="cf">
                    <div className="task-edit-buttons">
                        <Button onClick={this.onSave}>Save Changes</Button>
                        <Link to={'/' + this.props.params.activeCategoryId}>
                            <Button>Cancel</Button>
                        </Link>
                    </div>
                </div>

                <div className="task-edit-title">
                    <Input
                        value={this.state.state.editTask && this.state.state.editTask.title}
                        onChange={this.onChangeTitle}
                    />
                </div>

                <div className="task-edit-checkbox">
                    <Checkbox
                        checked={this.state.state.editTask && this.state.state.editTask.done}
                        onChange={this.onChangeDone}
                    >Done</Checkbox>
                </div>

                <div className="task-edit-textarea">
                    <Textarea
                        value={this.state.state.editTask && this.state.state.editTask.description}
                        onChange={this.onChangeDescription}
                    />
                </div>
            </div>
        )
    }
}
export default TaskEdit;