import {combineReducers} from 'redux-immutable'

import addCategory from './ui-state/add-category'
import taskEdit from './ui-state/task-edit'

const reducer = combineReducers({
    addCategoryTitle: addCategory,
    taskEdit
});

export default reducer;


