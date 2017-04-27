import {combineReducers} from 'redux-immutable';

import uiState from './ui-state';
import category from './category';
import task from './task';

const reducer = combineReducers({
    uiState,
    category,
    task
});

export default reducer;


