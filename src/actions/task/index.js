import {createAction} from '../../helpers/action';
import uuid from 'uuid/v4';
import {Modal} from 'antd-mobile';

import {
    TASK_DELETE,
    TASK_CREATE,
    TASK_STATUS_CHANGE,
    TASK_TITLE_CHANGE,
    TASK_DESCRIPTION_CHANGE,
    TASK_CATEGORY_CHANGE
} from './constants';


export const deleteTask = createAction(TASK_DELETE);
export const onStatusChange = createAction(TASK_STATUS_CHANGE);
export const onTitleChange = createAction(TASK_TITLE_CHANGE);
export const onDescriptionChange = createAction(TASK_DESCRIPTION_CHANGE);
export const onCategoryChange = createAction(TASK_CATEGORY_CHANGE);
export const createTask = createAction(TASK_CREATE);


export const createTaskPrompt = (category) => (dispatch) => {
    Modal.prompt('Create task', '',
        [
            {text: 'Cancel'},
            {
                text: 'Create',
                onPress: title => new Promise((resolve) => {
                    dispatch(createTask({
                        id: uuid(),
                        category,
                        title,
                        description: '',
                        completed: false
                    }));
                    resolve();
                }),
            },
        ], 'default', null, ['Task name']);

};
