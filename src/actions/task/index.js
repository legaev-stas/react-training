import {createAction} from '../../helpers/action';
import {getState} from '../../helpers/store';
import uuid from 'uuid/v4';
import Modal from 'antd-mobile/lib/modal';
import {initActionPropagationToServer} from '../sync-queue';

import {
    TASK_DELETE,
    TASK_CREATE,
    TASK_UPDATE,
    TASK_STATUS_CHANGE,
    EDITABLE_TASK_STATUS_CHANGE,
    EDITABLE_TASK_TITLE_CHANGE,
    EDITABLE_TASK_DESCRIPTION_CHANGE,
    EDITABLE_TASK_CATEGORY_CHANGE
} from './constants';


export const deleteTaskLocally = createAction(TASK_DELETE);
export const createTask = createAction(TASK_CREATE);
export const updateTaskLocally = createAction(TASK_UPDATE);
export const onTaskStatusChangeLocally = createAction(TASK_STATUS_CHANGE);
export const onEditableTaskStatusChange = createAction(EDITABLE_TASK_STATUS_CHANGE);
export const onEditableTaskTitleChange = createAction(EDITABLE_TASK_TITLE_CHANGE);
export const onEditableTaskDescriptionChange = createAction(EDITABLE_TASK_DESCRIPTION_CHANGE);
export const onEditableTaskCategoryChange = createAction(EDITABLE_TASK_CATEGORY_CHANGE);


export const onTaskStatusChange = (payload) => (dispatch) => {
    dispatch(onTaskStatusChangeLocally(payload));
    dispatch(initActionPropagationToServer({
        type: TASK_UPDATE,
        payload
    }));
};

export const updateTask = () => (dispatch) => {
    const payload = getState().ui.get('editableTask').toJS();
    dispatch(updateTaskLocally(payload));
    dispatch(initActionPropagationToServer({
        type: TASK_UPDATE,
        payload
    }));
};

export const deleteTask = (payload) => (dispatch) => {
    dispatch(deleteTaskLocally(payload));
    dispatch(initActionPropagationToServer({
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
                    dispatch(initActionPropagationToServer({
                        type: TASK_CREATE,
                        payload
                    }));
                    resolve();
                }),
            },
        ], 'default', null, ['Task name']);
};

