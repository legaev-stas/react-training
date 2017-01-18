import uuid from 'uuid/v4';
import createReducer from './reducer-utilities';

const initialState = {collection: []};

const addCategory = (state, action) => {
    let collection = state.collection.slice(0);
    collection.push({
        id: uuid(),
        name: action.payload.title,
        parent: null
    });

    return Object.assign({}, state, {
        collection: collection
    });
}
const addNestedCategory = (state, action) => {
// TODO: rework browser modals with components
    const name = prompt('Please enter category title');
    if (name) {
        let collection = state.collection.slice(0);
        collection.push({
            id: uuid(),
            name: name,
            parent: action.payload.addToCategoryId
        });

        return Object.assign({}, state, {
            collection: collection
        });
    } else {
        return state;
    }
}
const editHandler = (state, action) => {
// TODO: rework browser modals with components
    const name = prompt('Please enter category title');
    if (name) {
        var collection = JSON.parse(JSON.stringify(state.collection));

        collection.filter(category => category.id === action.payload.editCategoryId)[0].name = name;

        return Object.assign({}, state, {
            collection: collection
        });
    } else {
        return state;
    }
}
const deleteHandler = (state, action) => {
    var collection = JSON.parse(JSON.stringify(state.collection));
    var categoriesIdToDelete = collection.filter(category => category.id === action.payload.deleteCategoryId);

    function findAllCategoriesIdToDelete(category) {
        var parentId = category.id;
        let nestedCategories = collection.filter(category => category.parent === parentId);

        nestedCategories.forEach(function (category) {
            categoriesIdToDelete.push(category);
            findAllCategoriesIdToDelete(category);
        });
    }

    findAllCategoriesIdToDelete(categoriesIdToDelete[0]);

    categoriesIdToDelete.forEach(function (category) {
        collection.splice(collection.indexOf(category), 1);
    });

    return Object.assign({}, state, {
        collection: collection
    });
}

const categoryReducer = createReducer(initialState, {
    'ADD_CATEGORY': addCategory,
    'ADD_NESTED_CATEGORY': addNestedCategory,
    'EDIT_CATEGORY': editHandler,
    'DELETE_CATEGORY': deleteHandler
});

export default categoryReducer;