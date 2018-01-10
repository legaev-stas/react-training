import {combineReducers} from 'redux-immutable';

import category from './category';
import task from './task';

const reducer = combineReducers({
    category,
    task
});

export default reducer;
