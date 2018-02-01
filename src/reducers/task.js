import {fromJS, List} from 'immutable';

import {
    TASK_DELETE,
    TASK_CREATE,
    TASK_UPDATE,
    TASK_STATUS_CHANGE,
    TASK_SYNC
} from '../actions/task/constants';
import {
    CATEGORY_DELETE
} from '../actions/category/constants';

let indexToUpdate;

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


        case TASK_UPDATE:
            indexToUpdate = state.findIndex(model => payload.id === model.get('id'));
            return state.update(indexToUpdate, () => fromJS(payload));


        case TASK_STATUS_CHANGE:
            indexToUpdate = state.findIndex(model => payload.id === model.get('id'));
            return state.update(indexToUpdate, model => model.set('completed', payload.completed));


        case TASK_SYNC:
            return new List(fromJS(payload));


        default:
            return state;
    }
};
