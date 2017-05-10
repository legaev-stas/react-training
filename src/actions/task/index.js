import {createAction} from '../../helpers/action';
import uuid from 'uuid/v4';

import {
    NEW_TASK_TITLE_CHANGE,
    NEW_TASK_ADD,
    TASK_STATUS_TOGGLE,
    EDIT_TASK_TITLE_CHANGE,
    EDIT_TASK_DESCRIPTION_CHANGE,
    EDIT_TASK_STATUS_TOGGLE,
    EDIT_TASK_SAVE,
    TASK_FILTER_SEARCH_CHANGE,
    TASK_FILTER_SHOW_DONE_CHANGE,
    TASK_FILTER_SEARCH_RESET
} from './constants';


export const toggleTaskStatus = createAction(TASK_STATUS_TOGGLE);
export const taskEditTitleChange = createAction(EDIT_TASK_TITLE_CHANGE);
export const taskEditDescriptionChange = createAction(EDIT_TASK_DESCRIPTION_CHANGE);
export const taskEditStatusToggle = createAction(EDIT_TASK_STATUS_TOGGLE);
export const taskEditSave = createAction(EDIT_TASK_SAVE);
export const setNewTaskTitleValue = createAction(NEW_TASK_TITLE_CHANGE);
export const setSearchValue = createAction(TASK_FILTER_SEARCH_CHANGE);
export const doneToggle = createAction(TASK_FILTER_SHOW_DONE_CHANGE);
export const resetSearchValue = createAction(TASK_FILTER_SEARCH_RESET);


export const addTask = (category, title) => {
    return {
        type: NEW_TASK_ADD,
        payload: {
            category,
            title,
            id: uuid(),
            description: '',
            done: false
        }
    }
};

