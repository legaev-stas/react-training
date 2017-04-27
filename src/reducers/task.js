import createReducer from './reducer-utilities';
import uuid from 'uuid/v4';

import {
    CATEGORY_DELETE_TASKS,
    NEW_TASK_ADD,
    TASK_STATUS_TOGGLE,
    EDIT_TASK_SAVE
} from '../actions/task/constants';


const initialState = {collection: []};

const deleteTasksOfCategory = (state, action) => {
    var taskCollection = JSON.parse(JSON.stringify(state.collection));
    var categoryCollection = JSON.parse(JSON.stringify(action.payload.categoryCollection));
    var categoriesIdToDelete = categoryCollection.filter(category => category.id === action.payload.deleteCategoryId);
    var taskIdToDelete = [];

    function findAllCategoriesIdToDelete(category) {
        var parentId = category.id;
        let nestedCategories = categoryCollection.filter(category => category.parent === parentId);

        nestedCategories.forEach(function (category) {
            categoriesIdToDelete.push(category);
            findAllCategoriesIdToDelete(category);
        });
    }

    findAllCategoriesIdToDelete(categoriesIdToDelete[0]);

    taskIdToDelete = taskCollection.filter(task => categoriesIdToDelete.map(category => category.id).indexOf(task.category) !== -1);
    taskIdToDelete.forEach(function (task) {
        taskCollection.splice(taskCollection.indexOf(task), 1);
    });

    return Object.assign({}, state, {
        collection: taskCollection
    });
};

const addTask = (state, action) => {
    if (action.payload.title.length) {
        var newId = uuid()
        var byIdPatch = {};
        byIdPatch[newId] = {
            category: action.payload.categoryId,
            id: newId,
            title: action.payload.title,
            description: '',
            done: false
        }

        return Object.assign({}, state, {
            byId: Object.assign({}, state.byId, byIdPatch),
            order: [newId].concat(state.order)
        });
    } else {
        return state;
    }
};

const toggleTaskStatus = (state, action) => {
    var byIdPatch = {};
    var taskToEdit = state.byId[action.payload.id];

    byIdPatch[action.payload.id] = Object.assign({}, taskToEdit, {
        done: !taskToEdit.done
    })

    return Object.assign({}, state, {
        byId: Object.assign({}, state.byId, byIdPatch)
    });
};

const updateTask = () => {
    //         var editTask = globalState.get().state.editTask;
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
}

const taskReducer = createReducer(initialState, {
    [CATEGORY_DELETE_TASKS]: deleteTasksOfCategory,
    [NEW_TASK_ADD]: addTask,
    [TASK_STATUS_TOGGLE]: toggleTaskStatus,
    [EDIT_TASK_SAVE]: updateTask
});

export default taskReducer;
