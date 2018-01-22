import {fromJS} from 'immutable';

import {
    CATEGORY_ADD,
    CATEGORY_EDIT,
    CATEGORY_DELETE,
    CATEGORY_SET_ACTIVE,
    CATEGORY_RESET_ACTIVE,
    CATEGORY_SET_SEARCH_MODE_ON,
    CATEGORY_SET_SEARCH_MODE_OFF,
    CATEGORY_SEARCH_STRING_UPDATE
} from '../actions/category/constants';

const initialState = fromJS({
    active: null,
    collection: [],
    searchMode: false,
    search: ''
});

export default (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case CATEGORY_ADD:
            if (payload.title.trim()) {
                return state.update('collection', collection => collection.set(collection.size, fromJS(payload)));
            } else {
                return state;
            }


        case CATEGORY_EDIT:
            const updateAtIndex = state.get('collection').findIndex(category => category.get('id') === payload.id);

            if (payload.title.trim() && updateAtIndex !== -1) {
                return state.update('collection', collection => {
                    return collection.update(updateAtIndex, category => {
                        return category.set('title', payload.title);
                    });
                });
            } else {
                return state;
            }


        case CATEGORY_DELETE:
            const deleteAtIndex = state.get('collection').findIndex(category => category.get('id') === payload);

            if (deleteAtIndex === -1) return state;

            return state.update('collection', collection => {
                return collection.delete(deleteAtIndex);
            });


        case CATEGORY_SET_ACTIVE:
            return state.set('active', payload);


        case CATEGORY_RESET_ACTIVE:
            return state.set('active', null);


        case CATEGORY_SET_SEARCH_MODE_ON:
            return state.set('searchMode', true);


        case CATEGORY_SET_SEARCH_MODE_OFF:
            return state.set('searchMode', false).set('search', '');


        case CATEGORY_SEARCH_STRING_UPDATE:
            return state.set('search', payload);


        default:
            return state;
    }
};
