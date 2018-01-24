import {createSimpleSelector, createSelector} from '../helpers/selector';
import {getState} from '../helpers/store';


const uiStateSlice = () => getState().ui;
const activeCategory = createSimpleSelector(uiStateSlice, 'activeCategory');
const activeTask = createSimpleSelector(uiStateSlice, 'activeTask');

export const app = createSelector([activeCategory, activeTask], (activeCategory, activeTask) => {
    return {
        activeCategory,
        activeTask
    };
});