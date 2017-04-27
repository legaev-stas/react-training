import {fromJS} from 'immutable';

import {
    TASK_FILTER_SEARCH_CHANGE,
    TASK_FILTER_SHOW_DONE_CHANGE,
    TASK_FILTER_SEARCH_RESET
} from '../../actions/task-filter/constants';

const initialState = fromJS({
    showDone: false,
    title: ''
});

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case TASK_FILTER_SEARCH_CHANGE:
            return state.set('title', payload);

        case TASK_FILTER_SEARCH_RESET:
            return state.set('title', '');

        case TASK_FILTER_SHOW_DONE_CHANGE:
            return state.set('showDone', payload);

            default:
            return state;
    }
};