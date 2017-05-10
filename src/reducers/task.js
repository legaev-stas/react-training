import {fromJS} from 'immutable';
import {getState} from '../helpers/store';

import {
    CATEGORY_DELETE_TASKS,
    NEW_TASK_ADD,
    TASK_STATUS_TOGGLE,
    EDIT_TASK_SAVE,
    NEW_TASK_TITLE_CHANGE,
    TASK_FILTER_SEARCH_CHANGE,
    TASK_FILTER_SHOW_DONE_CHANGE,
    TASK_FILTER_SEARCH_RESET,
    EDIT_TASK_TITLE_CHANGE,
    EDIT_TASK_DESCRIPTION_CHANGE,
    EDIT_TASK_STATUS_TOGGLE
} from '../actions/task/constants';

const initialState = fromJS({
    ui: {
        newTaskTitle: '',
        filter: {
            showDone: false,
            title: ''
        },
        taskEdit: {
            category: '',
            title: '',
            done: false,
            description: ''
        }
    },
    byId: {},
    order: []
});

export default (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case NEW_TASK_TITLE_CHANGE:
            return state.setIn(['ui', 'newTaskTitle'], payload);

        case TASK_FILTER_SEARCH_CHANGE:
            return state.setIn(['ui','filter', 'title'], payload);

        case TASK_FILTER_SEARCH_RESET:
            return state.setIn(['ui','filter', 'title'], '');

        case TASK_FILTER_SHOW_DONE_CHANGE:
            return state.setIn(['ui','filter', 'showDone'], payload);

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
                    .set('byId', state.get('byId').merge(byIdPatch))
                    .set('order', fromJS([payload.id]).concat(state.get('order')))
                    .setIn(['ui', 'newTaskTitle'], '');
            } else {
                return state;
            }


        case TASK_STATUS_TOGGLE:
            var currentStatus = state.getIn(['byId', payload, 'done']);

            return state.setIn(['byId', payload, 'done'], !currentStatus);


        case EDIT_TASK_TITLE_CHANGE:
            return state.setIn(['ui', 'taskEdit', 'title'], payload);


        case EDIT_TASK_DESCRIPTION_CHANGE:
            return state.setIn(['ui', 'taskEdit', 'description'], payload);


        case EDIT_TASK_STATUS_TOGGLE:
            return state.setIn(['ui', 'taskEdit', 'done'], payload);


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
