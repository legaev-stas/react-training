import {fromJS} from 'immutable';

import {
    TASK_DELETE,
    TASK_CREATE,
    TASK_STATUS_CHANGE,
    TASK_TITLE_CHANGE,
    TASK_DESCRIPTION_CHANGE,
    TASK_CATEGORY_CHANGE
} from '../actions/task/constants';
import {
    CATEGORY_DELETE
} from '../actions/category/constants';


const findModelAndUpdateValue = (collection, id, key, value) => {
    let index = collection.findIndex(model => id === model.get('id'));
    return collection.update(index, model => model.set(key, value));
};


export default (state = fromJS([]), action) => {
    const {type, payload} = action;

    switch (type) {
        case CATEGORY_DELETE:
            // payload here is category
            const collectionOfAssociatedTasks = state.filter(task => payload.id === task.get('category'));

            if (collectionOfAssociatedTasks.size) {
                return state.filterNot(task => payload.id === task.get('category'));
            }

            return state;


        case TASK_DELETE:
            const deleteAtIndex = state.findIndex(task => task.get('id') === payload.id);

            if (deleteAtIndex === -1) return state;

            return state.delete(deleteAtIndex);


        case TASK_CREATE:
            if (payload.title.trim()) {
                return state.push(fromJS(payload));
            } else {
                return state;
            }


        case TASK_STATUS_CHANGE:
            return findModelAndUpdateValue(
                state,
                payload.id,
                'completed',
                payload.completed
            );


        case TASK_TITLE_CHANGE:
            return findModelAndUpdateValue(
                state,
                payload.id,
                'title',
                payload.title
            );


        case TASK_DESCRIPTION_CHANGE:
            return findModelAndUpdateValue(
                state,
                payload.id,
                'description',
                payload.description
            );


        case TASK_CATEGORY_CHANGE:
            return findModelAndUpdateValue(
                state,
                payload.id,
                'category',
                payload.category
            );


        default:
            return state;
    }
};
