import {createSimpleSelector, createSelector} from '../helpers/selector';
import {getState} from '../helpers/store';
import {Map} from 'immutable';


const categoryStoreSlice = () => getState().category;
const categoryCollection = createSimpleSelector(categoryStoreSlice, 'collection');
const taskStoreSlice = () => getState().task;
const activeTaskId = createSimpleSelector(taskStoreSlice, 'active');
const taskCollection = createSimpleSelector(taskStoreSlice, 'collection');
const filterShowCompleted = createSimpleSelector(taskStoreSlice, 'filterShowCompleted');


const task = createSelector(
    [activeTaskId, taskCollection],
    (activeTaskId, taskCollection) => taskCollection.find(task => task.get('id') === activeTaskId)
);

const categoryPickerList = createSelector([categoryCollection], (categoryCollection) =>
    categoryCollection.map(category => new Map({
        value: category.get('id'),
        label: category.get('title')
    }))
);

const categoryTitle = createSelector([categoryCollection, task], (categoryCollection, task) =>
    categoryCollection.find(category => category.get('id') === task.get('category')).get('title')
);

export const taskPageSelector = createSelector(
    [categoryPickerList, task, categoryTitle],
    (categoryPickerList, task, categoryTitle) => ({
        categoryPickerList,
        task,
        categoryTitle
    })
);
