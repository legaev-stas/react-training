import React from 'react';
import {List} from '../../components/list';


export class TaskList extends React.Component {
    constructor(props) {
        super(props);

        this.editTask = this.editTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    editTask({id}) {
        this.props.editTask(id);
    }

    deleteTask({id}) {
        this.props.deleteTask(id);
    }

    render() {
        return (
            <List
                checkable
                arrow
                collection={this.props.collection}
                onClick={this.editTask}
                onDelete={this.deleteTask}
                onStatusChange={this.props.onStatusChange}
            />
        );
    }
}

