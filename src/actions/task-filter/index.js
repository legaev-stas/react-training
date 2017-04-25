import {
    TASK_FILTER_SEARCH_CHANGE,
    TASK_FILTER_SHOW_DONE_CHANGE
} from './constants';

export const setSearchValue = (text) => {
    return {
        type: TASK_FILTER_SEARCH_CHANGE,
        payload: {
            text
        }
    }
};
export const doneToggle = (checked) => {
    return {
        type: TASK_FILTER_SHOW_DONE_CHANGE,
        payload: {
            checked
        }
    }
};
