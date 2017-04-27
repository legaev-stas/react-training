import {createAction} from '../../helpers/action';
import {
    TASK_FILTER_SEARCH_CHANGE,
    TASK_FILTER_SHOW_DONE_CHANGE,
    TASK_FILTER_SEARCH_RESET
} from './constants';

export const setSearchValue = createAction(TASK_FILTER_SEARCH_CHANGE);
export const doneToggle = createAction(TASK_FILTER_SHOW_DONE_CHANGE);
export const resetSearchValue = createAction(TASK_FILTER_SEARCH_RESET);
