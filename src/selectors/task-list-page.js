import {createSimpleSelector, createSelector} from '../helpers/selector';
import {getState} from '../helpers/store';

const state = (state = getState()) => state;

const categoryStoreSlice = createSimpleSelector(state, 'category');
const categoryCollection = createSimpleSelector(categoryStoreSlice, 'collection');
const activeCategoryId = createSimpleSelector(categoryStoreSlice, 'active');
const taskStoreSlice = createSimpleSelector(state, 'task');
const taskCollection = createSimpleSelector(taskStoreSlice, 'collection');

export const taskList = createSelector([categoryCollection, taskCollection, activeCategoryId],
    (categoryCollection, taskCollection, activeCategoryId) => {
        const categoryTitle = categoryCollection.find(v => v.get('id') === activeCategoryId).get('title');
        const collection = taskCollection.filter(v => v.get('category') === activeCategoryId).toJS();

        return {
            categoryTitle,
            collection
        };
    });
