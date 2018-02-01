import {Map, List, fromJS} from 'immutable';

import {
    TASK_ADD_TO_SYNC_QUEUE,
    TASK_CLEAN_SYNC_QUEUE
} from '../actions/task/constants';
import {
    CATEGORY_ADD_TO_SYNC_QUEUE,
    CATEGORY_CLEAN_SYNC_QUEUE
} from '../actions/category/constants';

let initialState = new Map;
initialState = initialState.set('task', new List);
initialState = initialState.set('category', new List);

export default (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case TASK_ADD_TO_SYNC_QUEUE:
            return state.update('task', task => task.push(fromJS(payload)));


        case TASK_CLEAN_SYNC_QUEUE:
            return state.set('task', new List);

        case CATEGORY_ADD_TO_SYNC_QUEUE:
            return state.update('category', task => task.push(fromJS(payload)));


        case CATEGORY_CLEAN_SYNC_QUEUE:
            return state.set('category', new List);


        default:
            return state;
    }
};
