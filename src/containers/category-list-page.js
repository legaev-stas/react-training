import React from 'react';
import {List} from '../components/list';
import {AppNavBar} from '../components/nav-bar/category-list-page';
import {Modal} from 'antd-mobile';
import {Page, Header, Content} from '../components/layout';
import {TaskListContainer} from './list/task-list';
import {StatusFilterContainer} from './nav-bar/status-filter';


export class CategoryListPage extends React.Component {
    constructor(props) {
        super(props);

        this.editCategory = this.editCategory.bind(this);
        this.deleteCategory = this.deleteCategory.bind(this);
        this.openCategory = this.openCategory.bind(this);
        this.createCategory = this.createCategory.bind(this);
    }

    deleteCategory({id, badge}) {
        const heading = 'Delete Category';
        const message = `Are you sure? The category contains ${badge} uncompleted tasks`;

        if (badge) {
            Modal.alert(heading, message, [
                {text: 'Cancel', style: 'default'},
                {text: 'OK', onPress: () => this.props.deleteCategory(id)},
            ]);
        } else {
            this.props.deleteCategory(id);
        }
    }

    openCategory({id}) {
        this.props.openCategory(id);
    }

    editCategory({id, title: originalTitle}) {
        Modal.prompt('Update category name', '',
            [
                {text: 'Cancel'},
                {
                    text: 'Update',
                    onPress: title => new Promise((resolve) => {
                        this.props.editCategory({
                            id,
                            title
                        });
                        resolve();
                    }),
                },
            ], 'default', originalTitle);
    }

    createCategory() {
        Modal.prompt('Create category', '',
            [
                {text: 'Cancel'},
                {
                    text: 'Create',
                    onPress: title => new Promise((resolve) => {
                        this.props.createCategory(title);
                        resolve();
                    }),
                },
            ], 'default', null, ['Category name']);
    }

    render() {
        return (
            <Page>
                <Header>
                    <AppNavBar
                        addItem={this.createCategory}
                        search={this.props.search}
                        searchMode={this.props.searchMode}
                        onSetSearchModeOn={this.props.onSetSearchModeOn}
                        onSetSearchModeOff={this.props.onSetSearchModeOff}
                        onSearchChange={this.props.onSearchChange}
                    />
                    {this.props.searchMode && this.props.search && <StatusFilterContainer/>}
                </Header>
                <Content>
                    {this.props.searchMode ?
                        <TaskListContainer/>
                        :
                        <List
                            collection={this.props.collection}
                            arrow
                            onEdit={this.editCategory}
                            onDelete={this.deleteCategory}
                            onClick={this.openCategory}
                        />
                    }
                </Content>
            </Page>
        );
    }
}

