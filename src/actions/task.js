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
