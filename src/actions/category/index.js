import {createAction, createParallelActions} from '../../helpers/action';
import uuid from 'uuid/v4';

import {
    CATEGORY_ADD,
    CATEGORY_EDIT,
    CATEGORY_DELETE,
    CATEGORY_SET_ACTIVE,
    CATEGORY_RESET_ACTIVE,
    CATEGORY_SET_SEARCH_MODE_ON,
    CATEGORY_SET_SEARCH_MODE_OFF,
    CATEGORY_SEARCH_STRING_UPDATE
} from './constants';

import {
    TASK_DELETE_WITH_CATEGORY
} from '../task/constants';


export const createCategory = (title) => {
    return {
        type: CATEGORY_ADD,
        payload: {
            id: uuid(),
            title
        }
    };
};


export const deleteCategory = createParallelActions([TASK_DELETE_WITH_CATEGORY, CATEGORY_DELETE]);
export const openCategory = createAction(CATEGORY_SET_ACTIVE);
export const editCategory = createAction(CATEGORY_EDIT);
export const goBack = createAction(CATEGORY_RESET_ACTIVE);
export const onSetSearchModeOn = createAction(CATEGORY_SET_SEARCH_MODE_ON);
export const onSetSearchModeOff = createAction(CATEGORY_SET_SEARCH_MODE_OFF);
export const onSearchChange = createAction(CATEGORY_SEARCH_STRING_UPDATE);


