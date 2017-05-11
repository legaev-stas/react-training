import React, {Component} from 'react';
import {Link} from 'react-router';
import './task-edit.css';
import Checkbox from '../forms/checkbox';
import Button from '../forms/button';
import Input from '../forms/input';
import Textarea from '../forms/textarea';


export class TaskEdit extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.onDataUpdate({
            category: this.props.category,
            id: this.props.id,
            title: this.props.title,
            description: this.props.description,
            done: this.props.done
        });
    }

    render() {
        const {params, title, done, description, onSave, onCancel, onChangeTitle, updateTaskStatus, onChangeDescription} = this.props;

        return (
            <div className="task-edit">
                <div className="cf">
                    <div className="task-edit-buttons">
                        <Link to={'/' + params.activeCategoryId} onClick={onSave}><Button>Save Changes</Button></Link>
                        <Link to={'/' + params.activeCategoryId} onClick={onCancel}><Button>Cancel</Button></Link>
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
                        onChange={updateTaskStatus}
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
    }
}
