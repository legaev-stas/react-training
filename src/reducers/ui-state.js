import {combineReducers} from 'redux'

import filter from './ui-state/filter'
import addCategory from './ui-state/add-category'
import addTask from './ui-state/add-task'

const reducer = combineReducers({
    filter,
    addCategoryTitle: addCategory,
    newTaskTitle: addTask
});

export default reducer;


