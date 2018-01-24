import {fromJS} from 'immutable';

import {
    CATEGORY_ADD,
    CATEGORY_EDIT,
    CATEGORY_DELETE
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
                return state.update('collection', collection => collection.push(fromJS(payload)));
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
            const deleteAtIndex = state.get('collection').findIndex(category => category.get('id') === payload.id);

            if (deleteAtIndex === -1) return state;

            return state.update('collection', collection => {
                return collection.delete(deleteAtIndex);
            });


        default:
            return state;
    }
};
