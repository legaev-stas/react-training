import {
    CATEGORY_ADD,
    CATEGORY_ADD_NESTED,
    CATEGORY_EDIT,
    CATEGORY_INITIAL_DELETE,
    CATEGORY_DELETE,
    CATEGORY_TITLE_CHANGE
} from './constants';

export const addCategory = (title) => {
    return {
        type: CATEGORY_ADD,
        payload: {
            title
        }
    }
};

export const addNestedCategory = (addToCategoryId) => {
    return {
        type: CATEGORY_ADD_NESTED,
        payload: {
            addToCategoryId
        }
    }
};

export const editHandler = (editCategoryId) => {
    return {
        type: CATEGORY_EDIT,
        payload: {
            editCategoryId
        }
    }
};

export const initialDeleteHandler = (deleteCategoryId) => {
    return {
        type: CATEGORY_INITIAL_DELETE,
        payload: {
            deleteCategoryId
        }
    }
};

export const deleteHandler = (deleteCategoryId) => {
    return {
        type: CATEGORY_DELETE,
        payload: {
            deleteCategoryId
        }
    }
};

export const setNewCategoryTitleValue = (e) => {
    return {
        type: CATEGORY_TITLE_CHANGE,
        payload: {
            text: e.target.value
        }
    }
};
