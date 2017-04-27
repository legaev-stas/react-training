import {
    CATEGORY_ADD,
    CATEGORY_TITLE_CHANGE
} from '../../actions/category/constants';

const initialState = '';

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case CATEGORY_ADD:
            return '';

        case CATEGORY_TITLE_CHANGE:
            return payload;

        default:
            return state;
    }
};
