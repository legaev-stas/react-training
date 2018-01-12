import {createSimpleSelector, createSelector} from '../../helpers/selector';
import {getState} from '../../helpers/store';


const taskStoreSlice = () => getState().task;
const filterShowCompleted = createSimpleSelector(taskStoreSlice, 'filterShowCompleted');
export const statusFilterSelector = createSelector([filterShowCompleted], filterShowCompleted => ({filterShowCompleted}));