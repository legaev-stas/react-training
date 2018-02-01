import {createSimpleSelector, createSelector} from '../helpers/selector';
import {getState} from '../helpers/store';
import {Map} from 'immutable';


const categoryCollection = () => getState().category;
const uiStateSlice = () => getState().ui;
const editableTask = createSimpleSelector(uiStateSlice, 'editableTask');


export const categoryPickerListSelector = createSelector([categoryCollection], (categoryCollection) =>
    categoryCollection.map(category => new Map({
        value: category.get('id'),
        label: category.get('title')
    }))
);

export const categoryTitleSelector = createSelector([categoryCollection, editableTask], (categoryCollection, task) =>
    categoryCollection.find(category => category.get('id') === task.get('category')).get('title')
);

export const taskPageSelector = createSelector(
    [categoryPickerListSelector, editableTask, categoryTitleSelector],
    (categoryPickerList, task, categoryTitle) => ({
        categoryPickerList,
        task,
        categoryTitle
    })
);
