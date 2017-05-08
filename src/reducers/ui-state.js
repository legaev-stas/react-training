import {combineReducers} from 'redux-immutable'

import taskEdit from './ui-state/task-edit'

const reducer = combineReducers({
    taskEdit
});

export default reducer;


