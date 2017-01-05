import React, {Component} from 'react';
import globalState from '../../state';
import InputGroup from '../forms/input-group';
import Button from '../forms/button';
import Task from '../task-item';

class TasksContainer extends Component {
    constructor(props) {
        super(props);

        this.state = globalState.get();

        // this.editHandler = this.editHandler.bind(this);
    }

    componentDidMount(){
        globalState.onChange(this.setState.bind(this));
    }


    render() {
        return (
            <div>
                <div className="heading">
                    <InputGroup type="text" placeholder="Add item"/>
                    <Button>Add</Button>
                </div>
                <div>
                    {this.state.data.taskList.filter(task => task.category === this.props.params.activeCategoryId).map((props) => <Task
                        key={props.id}
                        {...props}
                    />)}
                </div>
            </div>
        );
    }
}

export default TasksContainer;