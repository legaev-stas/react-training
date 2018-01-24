import {fromJS} from 'immutable';

import {
    UI_SET_ACTIVE_CATEGORY,
    UI_UNSET_ACTIVE_CATEGORY,
    UI_SET_ACTIVE_TASK,
    UI_UNSET_ACTIVE_TASK,
    UI_SET_SEARCH_MODE_ON,
    UI_SET_SEARCH_MODE_OFF,
    UI_SET_SEARCH_QUERY,
    UI_SET_FILTER_SHOW_COMPLETED_TASK
} from '../actions/ui-state/constants';

const initialState = fromJS({
    activeCategory: null,
    activeTask: null,
    searchMode: false,
    searchQuery: '',
    filterShowCompletedTasks: false
});

export default (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case UI_SET_ACTIVE_CATEGORY:
            return state.set('activeCategory', payload.id);


        case UI_UNSET_ACTIVE_CATEGORY:
            return state.set('activeCategory', null);


        case UI_SET_ACTIVE_TASK:
            return state.set('activeTask', payload.id);


        case UI_UNSET_ACTIVE_TASK:
            return state.set('activeTask', null);

        case UI_SET_SEARCH_MODE_ON:
            return state.set('searchMode', true);


        case UI_SET_SEARCH_MODE_OFF:
            return state.set('searchMode', false).set('searchQuery', '');


        case UI_SET_SEARCH_QUERY:
            return state.set('searchQuery', payload);


        case UI_SET_FILTER_SHOW_COMPLETED_TASK:
            return state.set('filterShowCompletedTasks', payload);


        default:
            return state;
    }
};
