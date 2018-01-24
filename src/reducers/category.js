import {fromJS} from 'immutable';

import {
    CATEGORY_ADD,
    CATEGORY_EDIT,
    CATEGORY_DELETE
} from '../actions/category/constants';


export default (state = fromJS([]), action) => {
    const {type, payload} = action;

    switch (type) {
        case CATEGORY_ADD:
            if (payload.title.trim()) {
                return state.push(fromJS(payload));
            } else {
                return state;
            }


        case CATEGORY_EDIT:
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


        default:
            return state;
    }
};
