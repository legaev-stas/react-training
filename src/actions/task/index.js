import {createAction} from '../../helpers/action';
import uuid from 'uuid/v4';

import {
    TASK_EDIT,
    TASK_DELETE,
    TASK_CREATE,
    TASK_STATUS_CHANGE
} from './constants';

import {
    CATEGORY_RESET_ACTIVE
} from '../category/constants';


export const editTask = createAction(TASK_EDIT);
export const deleteTask = createAction(TASK_DELETE);
export const goBack = createAction(CATEGORY_RESET_ACTIVE);

export const createTask = ({title, category}) => {
    return {
        type: TASK_CREATE,
        payload: {
            id: uuid(),
            title,
            category,
            description: '',
            completed: false
        }
    };
};

export const onStatusChange = ({id, checked}) => {
    return {
        type: TASK_STATUS_CHANGE,
        payload: {
            id,
            completed: checked
        }
    };
};


