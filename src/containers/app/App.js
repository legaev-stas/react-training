import React from 'react';
import {withRouter} from 'react-router';
import './App.css';

import Header from '../../components/header';
import {headerConnector} from '../../connector/header';

import ProgressBar from '../../components/progress-bar';
import {progressBarConnector} from '../../connector/progress-bar';

import {AddCategoryForm, CategoryList} from '../../components/category';
import {addCategoryFormConnector, categoryListConnector} from '../../connector/category-bar';

const HeaderContainer = headerConnector(Header);
const ProgressBarContainer = progressBarConnector(ProgressBar);
const AddCategoryFormContainer = addCategoryFormConnector(AddCategoryForm);
const CategoryListContainer = withRouter(categoryListConnector(CategoryList));

export default ({TaskContainer}) => (
    <div className="App">
        <HeaderContainer/>
        <ProgressBarContainer/>

        <div className="cf">
            <div className="left category-bar">
                <AddCategoryFormContainer/>
                <CategoryListContainer/>
            </div>
            <div className="todo-list right">
                { TaskContainer ? TaskContainer : null }
            </div>
        </div>
    </div>
);

