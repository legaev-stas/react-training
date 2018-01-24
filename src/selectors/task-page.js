import {createSimpleSelector, createSelector} from '../helpers/selector';
import {getState} from '../helpers/store';
import {Map} from 'immutable';


const categoryCollection = () => getState().category;
const taskCollection = () => getState().task;
const uiStateSlice = () => getState().ui;
const activeTask = createSimpleSelector(uiStateSlice, 'activeTask');



export const taskSelector = createSelector(
    [activeTask, taskCollection],
    (activeTask, taskCollection) => taskCollection.find(task => task.get('id') === activeTask)
);

export const categoryPickerListSelector = createSelector([categoryCollection], (categoryCollection) =>
    categoryCollection.map(category => new Map({
        value: category.get('id'),
        label: category.get('title')
    }))
);

export const categoryTitleSelector = createSelector([categoryCollection, taskSelector], (categoryCollection, task) =>
    categoryCollection.find(category => category.get('id') === task.get('category')).get('title')
);

export const taskPageSelector = createSelector(
    [categoryPickerListSelector, taskSelector, categoryTitleSelector],
    (categoryPickerList, task, categoryTitle) => ({
        categoryPickerList,
        task,
        categoryTitle
    })
);
