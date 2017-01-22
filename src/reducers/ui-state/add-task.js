import createReducer from '../reducer-utilities';

const setNewTaskTitleValue = (state, action) => {
    return action.payload.value;
};


const taskReducer = createReducer('', {
    'CHANGE_INPUT_NEW_TASK_TITLE': setNewTaskTitleValue
});

export default taskReducer;
