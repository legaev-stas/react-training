import React from 'react';
import {List} from '../components/list';
import {AppNavBar} from '../components/nav-bar/category-list-page';
import {Page, Header, Content} from '../components/layout';
import {TaskListContainer} from './list/task-list';
import {StatusFilterContainer} from './nav-bar/status-filter';


export const CategoryListPage = ({
                                     collection,
                                     searchQuery,
                                     searchMode,
                                     editCategoryPrompt,
                                     deleteCategoryConfirmation,
                                     createCategoryPrompt,
                                     onSetSearchModeOn,
                                     onSetSearchModeOff,
                                     onChangeSearchQuery,
                                     onSetActiveCategory
                                 }) => (
    <Page>
        <Header>
            <AppNavBar
                addItem={createCategoryPrompt}
                searchQuery={searchQuery}
                searchMode={searchMode}
                onSetSearchModeOn={onSetSearchModeOn}
                onSetSearchModeOff={onSetSearchModeOff}
                onChangeSearchQuery={onChangeSearchQuery}
            />
            {searchMode && searchQuery && <StatusFilterContainer/>}
        </Header>
        <Content>
            {searchMode ?
                <TaskListContainer/>
                :
                <List
                    collection={collection}
                    arrow
                    onEdit={editCategoryPrompt}
                    onDelete={deleteCategoryConfirmation}
                    onClick={onSetActiveCategory}
                />
            }
        </Content>
    </Page>
);
