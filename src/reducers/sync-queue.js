import {Map, fromJS} from 'immutable';

import {
    TASK_ADD_TO_SYNC_QUEUE,
    TASK_CLEAN_SYNC_QUEUE
} from '../actions/task/constants';

let initialState = new Map;
initialState = initialState.set('task', new Map);

export default (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case TASK_ADD_TO_SYNC_QUEUE:
            return state.update('task', task => task.set(payload.payload.id, fromJS(payload)));


        case TASK_CLEAN_SYNC_QUEUE:
            return state.set('task', new Map);


        default:
            return state;
    }
};
