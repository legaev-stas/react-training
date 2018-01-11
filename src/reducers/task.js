import {fromJS} from 'immutable';

import {
    TASK_DELETE_WITH_CATEGORY,
    TASK_EDIT,
    TASK_DELETE,
    TASK_CREATE,
    TASK_STATUS_CHANGE,
    TASK_FILTER_CHANGE
} from '../actions/task/constants';

const initialState = fromJS({
    active: null,
    filterShowCompleted: true,
    collection: []
});

export default (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case TASK_DELETE_WITH_CATEGORY:
            return state.update('collection', collection => {
                return collection.filterNot(task => payload === task.get('category'));
            });


        case TASK_DELETE:
            return state.update('collection', collection => {
                return collection.filterNot(task => payload === task.get('id'));
            });


        case TASK_EDIT:
            return state.set('active', payload);


        case TASK_CREATE:
            return state.update('collection', collection => {
                return collection.push(fromJS(payload));
            });


        case TASK_STATUS_CHANGE:
            const indexToUpdate = state.get('collection').findIndex(task => payload.id === task.get('id'));

            return state.update('collection', collection => {
                return collection.update(indexToUpdate, task => task.set('completed', payload.completed));
            });


        case TASK_FILTER_CHANGE:
            return state.set('filterShowCompleted', payload);


        default:
            return state;
    }
};
