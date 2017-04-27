import {combineReducers} from 'redux-immutable'

import filter from './ui-state/filter'
import addCategory from './ui-state/add-category'
import addTask from './ui-state/add-task'
import taskEdit from './ui-state/task-edit'

const reducer = combineReducers({
    filter,
    addCategoryTitle: addCategory,
    newTaskTitle: addTask,
    taskEdit
});

export default reducer;


