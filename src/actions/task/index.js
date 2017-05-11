import {createAction} from '../../helpers/action';
import uuid from 'uuid/v4';

import {
    NEW_TASK_TITLE_CHANGE,
    NEW_TASK_ADD,
    TASK_STATUS_TOGGLE,
    EDIT_TASK_SAVE,
    EDIT_TASK_CANCEL,
    EDIT_TASK_TEMP_DATA_INIT,
    EDIT_TASK_TEMP_DATA_TITLE_UPDATE,
    EDIT_TASK_TEMP_DATA_STATUS_UPDATE,
    EDIT_TASK_TEMP_DATA_DESCRIPTION_UPDATE,
    TASK_FILTER_SEARCH_CHANGE,
    TASK_FILTER_SHOW_DONE_CHANGE,
    TASK_FILTER_SEARCH_RESET
} from './constants';

//task filter actions
export const setSearchValue = createAction(TASK_FILTER_SEARCH_CHANGE);
export const doneToggle = createAction(TASK_FILTER_SHOW_DONE_CHANGE);
export const resetSearchValue = createAction(TASK_FILTER_SEARCH_RESET);

// new task actions
export const setNewTaskTitleValue = createAction(NEW_TASK_TITLE_CHANGE);

// task actions
export const toggleTaskStatus = createAction(TASK_STATUS_TOGGLE);

// edit task actions
export const taskEditSave = createAction(EDIT_TASK_SAVE);
export const taskEditCancel = createAction(EDIT_TASK_CANCEL);
export const setTempTaskData = createAction(EDIT_TASK_TEMP_DATA_INIT);
export const updateTaskTitle = createAction(EDIT_TASK_TEMP_DATA_TITLE_UPDATE);
export const updateTaskStatus = createAction(EDIT_TASK_TEMP_DATA_STATUS_UPDATE);
export const updateTaskDescription = createAction(EDIT_TASK_TEMP_DATA_DESCRIPTION_UPDATE);


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

