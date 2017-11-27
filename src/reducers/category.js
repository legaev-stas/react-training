import {fromJS} from 'immutable';

import {
    CATEGORY_ADD,
    CATEGORY_ADD_NESTED,
    CATEGORY_EDIT,
    CATEGORY_DELETE,
    CATEGORY_TITLE_CHANGE,
    CATEGORY_SET_ACTIVE
} from '../actions/category/constants';

const initialState = fromJS({
    active: null,
    ui: {addCategoryTitle: ''},
    collection: []
});

export default (state = initialState, action) => {
    const {type, payload} = action;
    var collection;

    switch (type) {
        case CATEGORY_TITLE_CHANGE:
            return state.setIn(['ui', 'addCategoryTitle'], payload);

        case CATEGORY_ADD:
            collection = state.get('collection');

            collection = fromJS([payload]).concat(collection);

            return state
                .set('collection', collection)
                .setIn(['ui', 'addCategoryTitle'], '');


        case CATEGORY_ADD_NESTED:
            collection = state.get('collection');

            collection = fromJS([payload]).concat(collection);

            return state.set('collection', collection);


        case CATEGORY_EDIT:
            collection = state.get('collection');

            collection = collection.map(item => {
                if (item.get('id') === payload.id) {
                    return item.set('name', payload.name);
                }
                return item;
            });

            return state.set('collection', collection);


        case CATEGORY_DELETE:
            collection = state.get('collection').toJS();
            var categoriesIdToDelete = collection
                .filter(category => category.id === payload)
                .map(item => item.id);

        function findAllCategoriesIdToDelete(parentId) {
            let nestedCategories = collection
                .filter(category => category.parent === parentId)
                .map(item => item.id);

            nestedCategories.forEach(function (category) {
                categoriesIdToDelete.push(category);
                findAllCategoriesIdToDelete(category);
            });
        }

            findAllCategoriesIdToDelete(categoriesIdToDelete[0]);

            collection = state.get('collection').filterNot(item => categoriesIdToDelete.includes(item.get('id')));

            return state.set('collection', collection);


        case CATEGORY_SET_ACTIVE:
            return state.set('active', payload);


        default:
            return state;
    }
};
