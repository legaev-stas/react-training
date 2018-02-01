import {createSimpleSelector, createSelector} from '../helpers/selector';
import {getState} from '../helpers/store';


const uiStateSlice = () => getState().ui;
const activeCategory = createSimpleSelector(uiStateSlice, 'activeCategory');
const editableTask = createSimpleSelector(uiStateSlice, 'editableTask');

export const app = createSelector([activeCategory, editableTask], (activeCategory, editableTask) => {
    return {
        activeCategory,
        editableTask
    };
});