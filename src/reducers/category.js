import {fromJS} from 'immutable';

import {
    CATEGORY_ADD,
    CATEGORY_EDIT,
    CATEGORY_DELETE,
    CATEGORY_OPEN
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
            if (payload.name) {
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
                    return item.set('name', payload.name);
                }
                return item;
            });

            return state.set('collection', collection);


        case CATEGORY_DELETE:
            let newCollection = state.get('collection').filterNot(value => payload === value.get('id'));

            return state.set('collection', newCollection);


        case CATEGORY_OPEN:
            return state.set('active', payload);


        default:
            return state;
    }
};
