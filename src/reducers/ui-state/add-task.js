import createReducer from '../reducer-utilities';
import { NEW_TASK_TITLE_CHANGE } from '../../actions/task/constants';

const setNewTaskTitleValue = (state, action) => {
    return action.payload.value;
};

const taskReducer = createReducer('', {
    [NEW_TASK_TITLE_CHANGE]: setNewTaskTitleValue
});

export default taskReducer;
