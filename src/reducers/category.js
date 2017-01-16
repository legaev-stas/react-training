import uuid from 'uuid/v4';

const addCategory = (state = [], action) => {
    let list = state.list.slice(0);
    list.push({
        id: uuid(),
        name: state.addCategoryTitle,
        parent: null
    });

    return Object.assign({}, state, {
        addCategoryTitle: '',
        list: list
    });
}
const addNestedCategory = (state = [], action) => {
// TODO: rework browser modals with components
    const name = prompt('Please enter category title');
    if (name) {
        let list = state.list.slice(0);
        list.push({
            id: uuid(),
            name: name,
            parent: action.payload.addToCategoryId
        });

        return Object.assign({}, state, {
            addCategoryTitle: '',
            list: list
        });
    } else {
        return state;
    }
}
const editHandler = (state = [], action) => {
// TODO: rework browser modals with components
    const name = prompt('Please enter category title');
    if (name) {
        var list = JSON.parse(JSON.stringify(state.list));

        list.filter(category => category.id === action.payload.editCategoryId)[0].name = name;

        return Object.assign({}, state, {
            list: list
        });
    } else {
        return state;
    }
}
const deleteHandler = (state = [], action) => {
// TODO: rework browser modals with components
    if (confirm('Are you sure you want to delete item?')) {
        var list = JSON.parse(JSON.stringify(state.list));
        var categoriesIdToDelete = list.filter(category => category.id === action.payload.deleteCategoryId);

        function findAllCategoriesIdToDelete(category) {
            var parentId = category.id;
            let nestedCategories = list.filter(category => category.parent === parentId);

            nestedCategories.forEach(function (category) {
                categoriesIdToDelete.push(category);
                findAllCategoriesIdToDelete(category);
            });
        }

        findAllCategoriesIdToDelete(categoriesIdToDelete[0]);

        categoriesIdToDelete.forEach(function (category) {
            list.splice(list.indexOf(category), 1);
        });

        // TODO: tasks remove should be in separate reducer
        // remove all related tasks
        // var taskIdToDelete = [];
        // taskIdToDelete = clonedState.data.taskList.filter(task => categoriesIdToDelete.map(category => category.id).indexOf(task.category) !== -1);
        // taskIdToDelete.forEach(function (task) {
        //     clonedState.data.taskList.splice(clonedState.data.taskList.indexOf(task), 1);
        // });

        return Object.assign({}, state, {
            list: list
        });
    } else{
        return state;
    }
}
const changeNewCategoryTitle = (state = [], action) => {
    return Object.assign({}, state, {
        addCategoryTitle: action.payload.text
    });
}

const dataReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CATEGORY':
            return addCategory.call(null, state, action);

        case 'ADD_NESTED_CATEGORY':
            return addNestedCategory.call(null, state, action);

        case 'EDIT_CATEGORY':
            return editHandler.call(null, state, action);

        case 'DELETE_CATEGORY':
            return deleteHandler.call(null, state, action);

        case 'CHANGE_NEW_CATEGORY_TITLE':
            return changeNewCategoryTitle.call(null, state, action);

        default:
            return state;
    }
}

export default dataReducer;
