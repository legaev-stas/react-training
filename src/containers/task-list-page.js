import React from 'react';
import NavBar from '../components/nav-bar/task-list-page';
import {List} from '../components/list';
import {Modal} from 'antd-mobile';
import {Page, Header, Content} from '../components/layout';
import {StatusFilterContainer} from './nav-bar/status-filter';


export class TaskListPage extends React.Component {
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

    createTask() {
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
            <Page>
                <Header>
                    <NavBar
                        title={this.props.categoryTitle}
                        goBack={this.props.goBack}
                        addItem={this.createTask}
                    />
                    <StatusFilterContainer/>
                </Header>
                <Content>
                    <List
                        checkable
                        arrow
                        collection={this.props.collection}
                        onClick={this.editTask}
                        onDelete={this.deleteTask}
                        onStatusChange={this.props.onStatusChange}
                    />
                </Content>
            </Page>
        );
    }
}

