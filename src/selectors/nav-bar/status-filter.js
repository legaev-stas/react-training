import {createSimpleSelector, createSelector} from '../../helpers/selector';
import {getState} from '../../helpers/store';


const uiStateSlice = () => getState().ui;
const filterShowCompletedTasks = createSimpleSelector(uiStateSlice, 'filterShowCompletedTasks');
export const statusFilterSelector = createSelector([filterShowCompletedTasks], filterShowCompletedTasks => ({checked: filterShowCompletedTasks}));