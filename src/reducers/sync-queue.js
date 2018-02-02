import {List, fromJS} from 'immutable';

import {
    SYNC_QUEUE_ADD_ACTION,
    SYNC_QUEUE_CLEAN
} from '../actions/sync-queue/constants';

let initialState = new List;

export default (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case SYNC_QUEUE_ADD_ACTION:
            return state.push(fromJS(payload));


        case SYNC_QUEUE_CLEAN:
            return new List;


        default:
            return state;
    }
};
