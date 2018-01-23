import {fromJS} from 'immutable';

import {
    TASK_DELETE_WITH_CATEGORY,
    TASK_EDIT,
    TASK_DELETE,
    TASK_CREATE,
    TASK_STATUS_CHANGE,
    TASK_FILTER_CHANGE,
    TASK_RESET_ACTIVE,
    TASK_TITLE_CHANGE,
    TASK_DESCRIPTION_CHANGE,
    TASK_CATEGORY_CHANGE
} from '../actions/task/constants';

const initialState = fromJS({
    active: null,
    filterShowCompleted: true,
    collection: []
});

const findModelAndUpdateValue = (collection, id, key, value) => {
    let index = collection.findIndex(model => id === model.get('id'));
    return collection.update(index, model => model.set(key, value));
};


export default (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case TASK_DELETE_WITH_CATEGORY:
            const collectionOfAssociatedTasks = state.get('collection').filter(task => payload.category === task.get('category'));

            if (collectionOfAssociatedTasks.size) {
                return state.update('collection', collection => {
                    return collection.filterNot(task => payload.category === task.get('category'));
                });
            }

            return state;


        case TASK_DELETE:
            const deleteAtIndex = state.get('collection').findIndex(task => task.get('id') === payload.id);

            if (deleteAtIndex === -1) return state;

            return state.update('collection', collection => {
                return collection.delete(deleteAtIndex);
            });


        case TASK_EDIT:
            return state.set('active', payload.id);


        case TASK_CREATE:
            if (payload.title.trim()) {
                return state.update('collection', collection => collection.push(fromJS(payload)));
            } else {
                return state;
            }


        case TASK_STATUS_CHANGE:
            return state.update('collection', collection => findModelAndUpdateValue(
                collection,
                payload.id,
                'completed',
                payload.completed
            ));


        case TASK_FILTER_CHANGE:
            return state.set('filterShowCompleted', payload);


        case TASK_RESET_ACTIVE:
            return state.set('active', null);


        case TASK_TITLE_CHANGE:
            return state.update('collection', collection => findModelAndUpdateValue(
                collection,
                payload.id,
                'title',
                payload.title
            ));


        case TASK_DESCRIPTION_CHANGE:
            return state.update('collection', collection => findModelAndUpdateValue(
                collection,
                payload.id,
                'description',
                payload.description
            ));


        case TASK_CATEGORY_CHANGE:
            return state.update('collection', collection => findModelAndUpdateValue(
                collection,
                payload.id,
                'category',
                payload.category
            ));


        default:
            return state;
    }
};
