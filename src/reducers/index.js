import {combineReducers} from 'redux'
import filter from './filter'
import category from './category'

const reducer = combineReducers({
    filter,
    category
});

export default reducer;


