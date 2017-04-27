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

export const setNewTaskTitleValue = (value) => {
    return {
        type: NEW_TASK_TITLE_CHANGE,
        payload: {
            value
        }
    }
};

export const addTask = (categoryId, title) => {
    return {
        type: NEW_TASK_ADD,
        payload: {
            categoryId,
            title
        }
    }
};

export const toggleTaskStatus = (id) => {
    return {
        type: TASK_STATUS_TOGGLE,
        payload: {
            id
        }
    }
};

export const editTaskTitle = (value) => {
    return {
        type: EDIT_TASK_TITLE_CHANGE,
        payload: {
            value
        }
    }
};

export const editTaskDescription = (value) => {
    return {
        type: EDIT_TASK_DESCRIPTION_CHANGE,
        payload: {
            value
        }
    }
};

export const editTaskToggleStatus = (value) => {
    return {
        type: EDIT_TASK_STATUS_TOGGLE,
        payload: {
            value
        }
    }
};

export const updateTask = (task) => {
    return {
        type: EDIT_TASK_SAVE,
        payload: task
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
