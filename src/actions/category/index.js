import {createAction} from '../../helpers/action';
import {
    CATEGORY_ADD,
    CATEGORY_ADD_NESTED,
    CATEGORY_EDIT,
    CATEGORY_DELETE,
    CATEGORY_TITLE_CHANGE
} from './constants';

export const addCategory = createAction(CATEGORY_ADD);
export const addNestedCategory = createAction(CATEGORY_ADD_NESTED);
export const editHandler = createAction(CATEGORY_EDIT);
export const deleteHandler = createAction(CATEGORY_DELETE);
export const setNewCategoryTitleValue = createAction(CATEGORY_TITLE_CHANGE);


