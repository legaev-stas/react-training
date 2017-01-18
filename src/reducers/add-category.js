import createReducer from './reducer-utilities'

const addCategory = () => {
    return '';
}

const changeNewCategoryTitle = (state, action) => {
    return action.payload.text;
}

const addCategoryReducer = createReducer('', {
    'ADD_CATEGORY' : addCategory,
    'CHANGE_NEW_CATEGORY_TITLE' : changeNewCategoryTitle
});

export default addCategoryReducer;
