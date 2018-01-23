import React from 'react';
import {List} from '../components/list';
import {AppNavBar} from '../components/nav-bar/category-list-page';
import {Page, Header, Content} from '../components/layout';
import {TaskListContainer} from './list/task-list';
import {StatusFilterContainer} from './nav-bar/status-filter';


export const CategoryListPage = ({
                                     collection,
                                     search,
                                     searchMode,
                                     editCategoryPrompt,
                                     deleteCategoryConfirmation,
                                     createCategoryPrompt,
                                     onSetSearchModeOn,
                                     onSetSearchModeOff,
                                     onSearchChange,
                                     openCategory
                                 }) => (
    <Page>
        <Header>
            <AppNavBar
                addItem={createCategoryPrompt}
                search={search}
                searchMode={searchMode}
                onSetSearchModeOn={onSetSearchModeOn}
                onSetSearchModeOff={onSetSearchModeOff}
                onSearchChange={onSearchChange}
            />
            {searchMode && search && <StatusFilterContainer/>}
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
                    onClick={openCategory}
                />
            }
        </Content>
    </Page>
);
