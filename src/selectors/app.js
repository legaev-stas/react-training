import {createSimpleSelector, createSelector} from '../helpers/selector';
import {getState} from '../helpers/store';


const categoryStoreSlice = () => getState().category;
const activeCategory = createSimpleSelector(categoryStoreSlice, 'active');
const taskStoreSlice = () => getState().task;
const activeTask = createSimpleSelector(taskStoreSlice, 'active');

export const app = createSelector([activeCategory, activeTask], (activeCategory, activeTask) => {
    return {
        activeCategory,
        activeTask
    };
});