import createReducer from '../reducer-utilities';
import {
    CATEGORY_ADD,
    CATEGORY_TITLE_CHANGE
} from '../../actions/category/constants';

const addCategory = () => {
    return '';
};

const setNewCategoryTitleValue = (state, action) => {
    return action.payload.text;
};

const addCategoryReducer = createReducer('', {
    [CATEGORY_ADD] : addCategory,
    [CATEGORY_TITLE_CHANGE] : setNewCategoryTitleValue
});

export default addCategoryReducer;
