import React from 'react';
import NavBar from '../components/nav-bar/task-list-page';
import {List} from '../components/list';
import {Modal, Flex, WingBlank, Switch, WhiteSpace} from 'antd-mobile';
import {Page, Header, Content} from '../components/layout';


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
                    <WingBlank>
                        <WhiteSpace/>
                        <Flex>
                            <Switch
                                checked={this.props.filterShowCompleted}
                                onChange={this.props.onFilterChange}
                            />
                            <Flex.Item>Show completed tasks </Flex.Item>
                        </Flex>
                        <WhiteSpace/>
                    </WingBlank>
                </Header>
                <Content>
                    <List
                        checkable
                        collection={this.props.collection}
                        onEdit={this.editTask}
                        onDelete={this.deleteTask}
                        onStatusChange={this.props.onStatusChange}
                    />
                </Content>
            </Page>
        );
    }
}

