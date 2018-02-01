import {fromJS} from 'immutable';

import {
    UI_SET_ACTIVE_CATEGORY,
    UI_UNSET_ACTIVE_CATEGORY,
    UI_SET_EDITABLE_TASK,
    UI_UNSET_EDITABLE_TASK,
    UI_SET_SEARCH_MODE_ON,
    UI_SET_SEARCH_MODE_OFF,
    UI_SET_SEARCH_QUERY,
    UI_CHANGE_FILTER_SHOW_COMPLETED_TASK
} from '../actions/ui-state/constants';

import {
    EDITABLE_TASK_CATEGORY_CHANGE,
    EDITABLE_TASK_DESCRIPTION_CHANGE,
    EDITABLE_TASK_STATUS_CHANGE,
    EDITABLE_TASK_TITLE_CHANGE
} from "../actions/task/constants";


const initialState = fromJS({
    activeCategory: null,
    editableTask: null,
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


        case UI_SET_EDITABLE_TASK:
            return state.set('editableTask', fromJS(payload));


        case UI_UNSET_EDITABLE_TASK:
            return state.set('editableTask', null);

        case UI_SET_SEARCH_MODE_ON:
            return state.set('searchMode', true);


        case UI_SET_SEARCH_MODE_OFF:
            return state.set('searchMode', false).set('searchQuery', '');


        case UI_SET_SEARCH_QUERY:
            return state.set('searchQuery', payload);


        case UI_CHANGE_FILTER_SHOW_COMPLETED_TASK:
            return state.set('filterShowCompletedTasks', payload);


        case EDITABLE_TASK_STATUS_CHANGE:
            return state.setIn(['editableTask', 'completed'], payload)


        case EDITABLE_TASK_TITLE_CHANGE:
            return state.setIn(['editableTask', 'title'], payload);


        case EDITABLE_TASK_DESCRIPTION_CHANGE:
            return state.setIn(['editableTask', 'description'], payload);


        case EDITABLE_TASK_CATEGORY_CHANGE:
            return state.setIn(['editableTask', 'category'], payload[0]);


        default:
            return state;
    }
};
