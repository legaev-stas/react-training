import createReducer from './reducer-utilities';

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
}

const x = (state, action) => {

}

const taskReducer = createReducer(initialState, {
    'DELETE_TASKS_OF_CATEGORY': deleteTasksOfCategory,
    'CHANGE_INPUT_NEW_TASK_TITLE': x
});

export default taskReducer;
