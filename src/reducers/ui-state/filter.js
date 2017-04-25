import createReducer from '../reducer-utilities'
import {
    TASK_FILTER_SEARCH_CHANGE,
    TASK_FILTER_SHOW_DONE_CHANGE
} from '../../actions/task-filter/constants';

const initialState = {
    showDone: false,
    title: ''
};

const setSearchValue = (state, action) => {
    return Object.assign({}, state, {
        title: action.payload.text
    });
}
const doneToggle = (state, action) => {
    return Object.assign({}, state, {
        showDone: action.payload.checked
    });
}

const filterReducer = createReducer(initialState, {
    [TASK_FILTER_SEARCH_CHANGE] : setSearchValue,
    [TASK_FILTER_SHOW_DONE_CHANGE] : doneToggle
});

export default filterReducer;