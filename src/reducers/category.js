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
