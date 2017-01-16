export const addCategory = () => {
    return {
        type: 'ADD_CATEGORY'
    }
};

export const addNestedCategory = (addToCategoryId) => {
    return {
        type: 'ADD_NESTED_CATEGORY',
        payload: {
            addToCategoryId
        }
    }
};

export const editHandler = (editCategoryId) => {
    return {
        type: 'EDIT_CATEGORY',
        payload: {
            editCategoryId
        }
    }
};

export const deleteHandler = (deleteCategoryId) => {
    return {
        type: 'DELETE_CATEGORY',
        payload: {
            deleteCategoryId
        }
    }
};

export const changeNewCategoryTitle = (e) => {
    return {
        type: 'CHANGE_NEW_CATEGORY_TITLE',
        payload: {
            text: e.target.value
        }
    }
};
