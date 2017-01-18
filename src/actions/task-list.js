export const changeInputNewTaskTitle = (e) => {
    return {
        type: 'CHANGE_INPUT_NEW_TASK_TITLE',
        payload: {
            text: e.target.value
        }
    }
};

export const addTask = (text) => {
    return {
        type: 'ADD_TASK',
        payload: {
            text
        }
    }
};

export const toggleTaskStatus = (text) => {
    return {
        type: 'TOGGLE_TASK_STATUS',
        payload: {
            text
        }
    }
};
