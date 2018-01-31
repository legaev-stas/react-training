import {createAction} from '../../helpers/action';
import uuid from 'uuid/v4';
import {Modal} from 'antd-mobile';
import {initTaskSync} from '../ws';

import {
    TASK_DELETE,
    TASK_CREATE,
    TASK_STATUS_CHANGE,
    TASK_TITLE_CHANGE,
    TASK_DESCRIPTION_CHANGE,
    TASK_CATEGORY_CHANGE,
    TASK_ADD_TO_SYNC_QUEUE,
    TASK_CLEAN_SYNC_QUEUE
} from './constants';


export const deleteTaskLocaly = createAction(TASK_DELETE);
export const createTask = createAction(TASK_CREATE);
export const addTaskToSyncQueue = createAction(TASK_ADD_TO_SYNC_QUEUE);
export const cleanTaskSyncQueue = createAction(TASK_CLEAN_SYNC_QUEUE);
export const onStatusChange = createAction(TASK_STATUS_CHANGE);
export const onTitleChange = createAction(TASK_TITLE_CHANGE);
export const onDescriptionChange = createAction(TASK_DESCRIPTION_CHANGE);
export const onCategoryChange = createAction(TASK_CATEGORY_CHANGE);


export const deleteTask = (payload) => (dispatch) => {
    dispatch(deleteTaskLocaly(payload));
    dispatch(initTaskSync({
        type: TASK_DELETE,
        payload
    }));
};

export const createTaskPrompt = (category) => (dispatch) => {
    Modal.prompt('Create task', '',
        [
            {text: 'Cancel'},
            {
                text: 'Create',
                onPress: title => new Promise((resolve) => {
                    const payload = {
                        id: uuid(),
                        category,
                        title,
                        description: '',
                        completed: false
                    };
                    dispatch(createTask(payload));
                    dispatch(initTaskSync({
                        type: TASK_CREATE,
                        payload
                    }));
                    resolve();
                }),
            },
        ], 'default', null, ['Task name']);
};

