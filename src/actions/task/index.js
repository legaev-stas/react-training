import {createAction} from '../../helpers/action';
import uuid from 'uuid/v4';

import {
    TASK_EDIT,
    TASK_DELETE,
    TASK_CREATE,
    TASK_STATUS_CHANGE,
    TASK_FILTER_CHANGE
} from './constants';


export const editTask = createAction(TASK_EDIT);
export const deleteTask = createAction(TASK_DELETE);
export const onFilterChange = createAction(TASK_FILTER_CHANGE);

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

export const onStatusChange = createAction(TASK_STATUS_CHANGE);
// export const onStatusChange = ({id, completed}) => {
//     return {
//         type: TASK_STATUS_CHANGE,
//         payload: {
//             id,
//             completed
//         }
//     };
// };


