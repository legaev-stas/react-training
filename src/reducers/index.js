import {combineReducers} from 'redux'

import filter from './filter'
import category from './category'
import addCategoryReducer from './add-category'
import task from './task'

const reducer = combineReducers({
    filter,
    category,
    task,
    addCategoryTitle: addCategoryReducer
});

export default reducer;


