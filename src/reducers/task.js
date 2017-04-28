import {fromJS} from 'immutable';
import {getState} from '../helpers/store';

import {
    CATEGORY_DELETE_TASKS,
    NEW_TASK_ADD,
    TASK_STATUS_TOGGLE,
    EDIT_TASK_SAVE
} from '../actions/task/constants';

const initialState = fromJS({collection: []});

export default (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case CATEGORY_DELETE_TASKS:
            let tasksOrder = state.get('order').toJS();
            let tasksById = state.get('byId').toJS();
            let categoryCollection = getState().getIn(['category', 'collection']).toJS();
            let categoriesIdToDelete = categoryCollection
                .filter(category => category.id === payload)
                .map(item => item.id);

        function findAllCategoriesIdToDelete(parentId) {
            let nestedCategories = categoryCollection
                .filter(category => category.parent === parentId)
                .map(item => item.id);

            nestedCategories.forEach(function (category) {
                categoriesIdToDelete.push(category);
                findAllCategoriesIdToDelete(category);
            });
        }

            findAllCategoriesIdToDelete(categoriesIdToDelete[0]);

            tasksOrder = tasksOrder.filter(id => !categoriesIdToDelete.includes(tasksById[id].category));
            tasksById = state.get('byId').filter(task => tasksOrder.includes(task.get('id')));

            return state
                .set('order', fromJS(tasksOrder))
                .set('byId', tasksById);


        case NEW_TASK_ADD:
            if (payload.title.length) {
                let byIdPatch = {};
                byIdPatch[payload.id] = payload;

                return state
                    .setIn('byId', state.get('byId').merge(byIdPatch))
                    .setIn('order', fromJS([payload.id]).concat(state.get('order')));
            } else {
                return state;
            }


        case TASK_STATUS_TOGGLE:
            var currentStatus = state.getIn(['byId', payload, 'done']);

            return state.setIt(['byId', payload, 'done'], !currentStatus);


        case EDIT_TASK_SAVE:
            return state;
        // var editTask = globalState.get().state.editTask;
//         var taskList = globalState.get().data.taskList;
//
//         var updatedTaskList = taskList.map((task) => {
//             if(task.id === editTask.id){
//                 return editTask;
//             }
//             return task;
//         });
//
//         globalState.set('data.taskList', updatedTaskList);
//         browserHistory.push('/' + this.props.params.activeCategoryId);


        default:
            return state;
    }
};
