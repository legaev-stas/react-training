import {combineReducers} from 'redux'
import uiStateReducer from './ui-state'
import dataReducer from './data-reducer'

const reducer = combineReducers({
    state: uiStateReducer,
    data: dataReducer
});

export default reducer;


