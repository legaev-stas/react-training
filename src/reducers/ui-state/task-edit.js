import createReducer from '../reducer-utilities';

const editTitle = (state, action) => {
    return Object.assign({}, state, {
        title: action.payload.value
    });
};

const editDescription = (state, action) => {
    return Object.assign({}, state, {
        description: action.payload.value
    });
};

const toggleStatus = (state, action) => {
    return Object.assign({}, state, {
        done: action.payload.value
    });
};

const editTaskReducer = createReducer({}, {
    'EDIT_TASK_CHANGE_TITLE': editTitle,
    'EDIT_TASK_CHANGE_DESCRIPTION': editDescription,
    'EDIT_TASK_TOGGLE_STATUS': toggleStatus
});

export default editTaskReducer;