import {fromJS} from 'immutable';
import {getState} from '../helpers/store';

import {
    TASK_DELETE_WITH_CATEGORY,
    NEW_TASK_ADD,
    TASK_STATUS_TOGGLE,
    EDIT_TASK,
    EDIT_TASK_SAVE,
    EDIT_TASK_CANCEL,
    EDIT_TASK_TEMP_DATA_INIT,
    EDIT_TASK_TEMP_DATA_TITLE_UPDATE,
    EDIT_TASK_TEMP_DATA_STATUS_UPDATE,
    EDIT_TASK_TEMP_DATA_DESCRIPTION_UPDATE,
    NEW_TASK_TITLE_CHANGE
} from '../actions/task/constants';

const initialState = fromJS({
    active: null,
    ui: {
        newTaskTitle: '',
        filter: {
            showDone: false,
            title: ''
        }
    },
    collection: []
});

export default (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case TASK_DELETE_WITH_CATEGORY:
            let newCollection = state.get('collection').filterNot(value => payload === value.get('category'));

            return state.set('collection', newCollection);





        default:
            return state;
    }
};
