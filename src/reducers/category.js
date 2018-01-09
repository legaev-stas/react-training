import {fromJS} from 'immutable';

import {
    CATEGORY_ADD,
    CATEGORY_EDIT,
    CATEGORY_DELETE,
    CATEGORY_SET_ACTIVE,
    CATEGORY_RESET_ACTIVE
} from '../actions/category/constants';

const initialState = fromJS({
    active: null,
    collection: []
});

export default (state = initialState, action) => {
    const {type, payload} = action;
    var collection;

    switch (type) {
        case CATEGORY_ADD:
            if (payload.title) {
                collection = state.get('collection');

                collection = collection.concat(fromJS([payload]));

                return state.set('collection', collection);
            } else {
                return state;
            }


        case CATEGORY_EDIT:
            collection = state.get('collection');

            collection = collection.map(item => {
                if (item.get('id') === payload.id) {
                    return item.set('title', payload.title);
                }
                return item;
            });

            return state.set('collection', collection);


        case CATEGORY_DELETE:
            let newCollection = state.get('collection').filterNot(value => payload === value.get('id'));

            return state.set('collection', newCollection);


        case CATEGORY_SET_ACTIVE:
            return state.set('active', payload);


        case CATEGORY_RESET_ACTIVE:
            return state.set('active', null);


        default:
            return state;
    }
};
