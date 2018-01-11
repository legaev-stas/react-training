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

    switch (type) {
        case CATEGORY_ADD:
            if (payload.title) {
                return state.update('collection', collection => collection.concat(fromJS([payload])));
            } else {
                return state;
            }


        case CATEGORY_EDIT:
            return state.update('collection', collection => {
                return collection.map(item => {
                    if (item.get('id') === payload.id) {
                        return item.set('title', payload.title);
                    }
                    return item;
                });
            });


        case CATEGORY_DELETE:
            return state.update('collection', collection =>{
                return collection.filterNot(value => payload === value.get('id'));
            });


        case CATEGORY_SET_ACTIVE:
            return state.set('active', payload);


        case CATEGORY_RESET_ACTIVE:
            return state.set('active', null);


        default:
            return state;
    }
};
