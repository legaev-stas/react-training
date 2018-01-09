import {createAction, createParallelActions} from '../../helpers/action';
import uuid from 'uuid/v4';

import {
    CATEGORY_ADD,
    CATEGORY_EDIT,
    CATEGORY_DELETE,
    CATEGORY_SET_ACTIVE
} from './constants';

import {
    TASK_DELETE_WITH_CATEGORY
} from '../task/constants';


export const addCategory = (name) => {
    return {
        type: CATEGORY_ADD,
        payload: {
            id: uuid(),
            name: name
        }
    };
};


export const deleteCategory = createParallelActions([TASK_DELETE_WITH_CATEGORY, CATEGORY_DELETE]);
export const openCategory = createAction(CATEGORY_SET_ACTIVE);
export const editCategory = createAction(CATEGORY_EDIT);


