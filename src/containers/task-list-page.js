import React from 'react';
import NavBar from '../components/nav-bar/task-list-page';
import {List} from '../components/list';
import {Modal, SegmentedControl, WingBlank, WhiteSpace } from 'antd-mobile';
import './task-list-page.css';


export class TaskList extends React.Component {
    constructor(props) {
        super(props);

        this.editTask = this.editTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.createTask = this.createTask.bind(this);
    }

    editTask({id}) {
        this.props.editTask(id);
    }

    deleteTask({id}) {
        this.props.deleteTask(id);
    }

    createTask(){
        const category = this.props.activeCategoryId;
        Modal.prompt('Create task', '',
            [
                {text: 'Cancel'},
                {
                    text: 'Create',
                    onPress: title => new Promise((resolve) => {
                        this.props.createTask({
                            category,
                            title
                        });
                        resolve();
                    }),
                },
            ], 'default', null, ['Task name']);
    }

    render() {
        return (
            <div>
                <div className="task-list-page-nav-bar">
                    <NavBar
                        title={this.props.categoryTitle}
                        goBack={this.props.goBack}
                        addItem={this.createTask}
                    />
                    <WingBlank>
                        <WhiteSpace/>
                        <SegmentedControl values={['Show full list', 'Hide completed tasks']} />
                        <WhiteSpace/>
                    </WingBlank>
                </div>
                <List
                    className="task-list-page-list"
                    checkable
                    collection={this.props.collection}
                    onEdit={this.editTask}
                    onDelete={this.deleteTask}
                    onStatusChange={this.props.onStatusChange}
                />
            </div>
        );
    }
}

