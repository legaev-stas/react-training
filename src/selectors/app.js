import {createSimpleSelector, createSelector} from '../helpers/selector';
import {getState} from '../helpers/store';

const state = (state = getState()) => state;

const categoryStoreSlice = createSimpleSelector(state, 'category');
const activeCategory = createSimpleSelector(categoryStoreSlice, 'active');
const taskStoreSlice = createSimpleSelector(state, 'task');
const activeTask = createSimpleSelector(taskStoreSlice, 'active');

export const app = createSelector([activeCategory, activeTask], (activeCategory, activeTask) => {
    return {
        activeCategory,
        activeTask
    };
});