import React from 'react';
import NavBar from '../components/nav-bar/task-list-page';
import {Modal} from 'antd-mobile';
import {Page, Header, Content} from '../components/layout';
import {StatusFilterContainer} from './nav-bar/status-filter';
import {TaskListContainer} from './list/task-list';


export class TaskListPage extends React.Component {
    constructor(props) {
        super(props);

        this.createTask = this.createTask.bind(this);
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
                    <TaskListContainer/>
                </Content>
            </Page>
        );
    }
}

