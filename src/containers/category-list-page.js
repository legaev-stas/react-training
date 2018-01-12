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

        this.openCategory = this.openCategory.bind(this);
    }

    openCategory({id}) {
        this.props.openCategory(id);
    }

    render() {
        return (
            <Page>
                <Header>
                    <AppNavBar
                        addItem={this.props.createCategoryPrompt}
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
                            onEdit={this.props.editCategoryPrompt}
                            onDelete={this.props.deleteCategoryConfirmation}
                            onClick={this.openCategory}
                        />
                    }
                </Content>
            </Page>
        );
    }
}

