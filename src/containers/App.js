import React from 'react';

import {appConnector} from '../connector/app';

import {CategoryListPage} from './category-list-page';
import {categoryListPageConnector} from '../connector/category-list-page';
const CategoryListPageContainer = categoryListPageConnector(CategoryListPage);

import {TaskList} from './task-list-page';
import {taskListPageConnector} from '../connector/task-list-page';
const TaskListPageContainer = taskListPageConnector(TaskList);


const App = ({activeCategory, activeTask}) => {
    let pageView = <CategoryListPageContainer/>;

    // TODO: add search result view

    if (activeCategory) {
        pageView = <TaskListPageContainer/>;
    }

    if (activeTask) {
        pageView = <div>Page Details View</div>
    }

    return (
        <div className="App noselect">
            {pageView}
        </div>
    );
}


export default appConnector(App);

