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
    let newCollection;

    switch (type) {
        case TASK_DELETE_WITH_CATEGORY:
            newCollection = state.get('collection').filterNot(value => payload === value.get('category'));

            return state.set('collection', newCollection);


        case TASK_DELETE:
            newCollection = state.get('collection').filterNot(value => payload === value.get('id'));

            return state.set('collection', newCollection);


        case TASK_EDIT:
            return state.set('active', payload);


        case TASK_CREATE:
            return state.set('collection', state.get('collection').push(fromJS(payload)));


        case TASK_STATUS_CHANGE:
            const indexToUpdate = state.get('collection').findIndex(task => payload.id === task.get('id'))
            newCollection = state.get('collection').update(indexToUpdate, task => task.set('completed', payload.completed));

            return state.set('collection', newCollection);


        case TASK_FILTER_CHANGE:
            return state.set('filterShowCompleted', payload);


        default:
            return state;
    }
};
