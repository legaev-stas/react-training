import React, {Component} from 'react';
import './task-item.css';
import Checkbox from '../forms/checkbox';
import Icon from '../icon';

export class TaskItem extends Component {
    constructor(args) {
        super(args);

        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onEdit = this.onEdit.bind(this);
    }

    onChangeStatus() {
        this.props.onChangeStatus(this.props.id);
    }

    onEdit() {
        this.props.onEdit(this.props.id);
    }

    render() {
        let {title, done} = this.props;

        return (
            <div className="task cf">
                <div className="task-checkbox-wrapper">
                    <Checkbox
                        checked={done}
                        onChange={this.onChangeStatus}
                    />
                </div>
                <div className="task-title">{title}</div>
                <div className="task-icon-wrapper">
                    <Icon type="edit" onClick={this.onEdit}/>
                </div>
            </div>
        );
    }
}

export default TaskItem;