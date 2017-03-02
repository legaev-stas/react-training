export const setNewTaskTitleValue = (value) => {
    return {
        type: 'CHANGE_INPUT_NEW_TASK_TITLE',
        payload: {
            value
        }
    }
};

export const addTask = (categoryId, title) => {
    return {
        type: 'ADD_TASK',
        payload: {
            categoryId,
            title
        }
    }
};

export const toggleTaskStatus = (id) => {
    return {
        type: 'TOGGLE_TASK_STATUS',
        payload: {
            id
        }
    }
};

export const editTaskTitle = (value) => {
    return {
        type: 'EDIT_TASK_CHANGE_TITLE',
        payload: {
            value
        }
    }
};

export const editTaskDescription = (value) => {
    return {
        type: 'EDIT_TASK_CHANGE_DESCRIPTION',
        payload: {
            value
        }
    }
};

export const editTaskToggleStatus = (value) => {
    return {
        type: 'EDIT_TASK_TOGGLE_STATUS',
        payload: {
            value
        }
    }
};

export const updateTask = (task) => {
    return {
        type: 'UPDATE_TASK',
        payload: task
    }
};
