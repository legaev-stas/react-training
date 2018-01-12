import React from 'react';
import NavBar from '../components/nav-bar/task-list-page';
import {Page, Header, Content} from '../components/layout';
import {StatusFilterContainer} from './nav-bar/status-filter';
import {TaskListContainer} from './list/task-list';


export class TaskListPage extends React.Component {
    constructor(props) {
        super(props);

        this.createTaskPrompt = this.createTaskPrompt.bind(this);
    }

    createTaskPrompt() {
        this.props.createTaskPrompt(this.props.activeCategoryId);
    }

    render() {
        return (
            <Page>
                <Header>
                    <NavBar
                        title={this.props.categoryTitle}
                        goBack={this.props.goBack}
                        addItem={this.createTaskPrompt}
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

