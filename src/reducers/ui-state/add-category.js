import createReducer from '../reducer-utilities';

const addCategory = () => {
    return '';
};

const setNewCategoryTitleValue = (state, action) => {
    return action.payload.text;
};

const addCategoryReducer = createReducer('', {
    'ADD_CATEGORY' : addCategory,
    'CHANGE_NEW_CATEGORY_TITLE' : setNewCategoryTitleValue
});

export default addCategoryReducer;
