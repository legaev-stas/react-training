import {fromJS, List} from 'immutable';

import {
    CATEGORY_CREATE,
    CATEGORY_UPDATE,
    CATEGORY_DELETE,
    CATEGORY_SYNC
} from '../actions/category/constants';


export default (state = fromJS([]), action) => {
    const {type, payload} = action;

    switch (type) {
        case CATEGORY_CREATE:
            if (payload.title.trim()) {
                return state.push(fromJS(payload));
            } else {
                return state;
            }


        case CATEGORY_UPDATE:
            const updateAtIndex = state.findIndex(category => category.get('id') === payload.id);

            if (payload.title.trim() && updateAtIndex !== -1) {
                return state.setIn([updateAtIndex, 'title'], payload.title);
            } else {
                return state;
            }


        case CATEGORY_DELETE:
            const deleteAtIndex = state.findIndex(category => category.get('id') === payload.id);

            if (deleteAtIndex === -1) return state;

            return state.delete(deleteAtIndex);


        case CATEGORY_SYNC:
            return new List(fromJS(payload));


        default:
            return state;
    }
};
