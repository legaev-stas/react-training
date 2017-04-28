import {createAction} from '../../helpers/action';
import uuid from 'uuid/v4';
import {getState} from '../../helpers/store';
import {
    NEW_TASK_TITLE_CHANGE,
    NEW_TASK_ADD,
    TASK_STATUS_TOGGLE,
    EDIT_TASK_TITLE_CHANGE,
    EDIT_TASK_DESCRIPTION_CHANGE,
    EDIT_TASK_STATUS_TOGGLE,
    EDIT_TASK_SAVE,
    CATEGORY_DELETE_TASKS
} from './constants';


export const toggleTaskStatus = createAction(TASK_STATUS_TOGGLE);
export const editTaskTitle = createAction(EDIT_TASK_TITLE_CHANGE);
export const editTaskDescription = createAction(EDIT_TASK_DESCRIPTION_CHANGE);
export const editTaskToggleStatus = createAction(EDIT_TASK_STATUS_TOGGLE);
export const updateTask = createAction(EDIT_TASK_SAVE);
export const setNewTaskTitleValue = createAction(NEW_TASK_TITLE_CHANGE);


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


export const deleteAllTasksOfCategory = (deleteCategoryId) => {
    return {
        type: CATEGORY_DELETE_TASKS,
        payload: {
            deleteCategoryId: deleteCategoryId,
            categoryCollection: getState().getIn(['category','collection'])
        }
    }
};
