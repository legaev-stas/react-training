import {createAction} from '../../helpers/action';
import uuid from 'uuid/v4';
import Modal from 'antd-mobile/lib/modal';

import {
    CATEGORY_CREATE,
    CATEGORY_UPDATE,
    CATEGORY_DELETE,
    CATEGORY_ADD_TO_SYNC_QUEUE,
    CATEGORY_CLEAN_SYNC_QUEUE
} from './constants';
import {initActionPropagationToServer} from "../sync-queue";


export const deleteCategory = createAction(CATEGORY_DELETE);
export const createCategory = createAction(CATEGORY_CREATE);
export const editCategory = createAction(CATEGORY_UPDATE);


export const deleteCategoryConfirmation = (category) => (dispatch) => {
    const heading = 'Delete Category';
    const message = `Are you sure? The category contains ${category.badge} uncompleted tasks`;

    if (category.badge) {
        Modal.alert(heading, message, [
            {text: 'Cancel', style: 'default'},
            {
                text: 'OK', onPress: () => {
                    dispatch(deleteCategory(category));
                    dispatch(initActionPropagationToServer({
                        type: CATEGORY_DELETE,
                        payload: category
                    }));
                }
            },
        ]);
    } else {
        dispatch(deleteCategory(category));
        dispatch(initActionPropagationToServer({
            type: CATEGORY_DELETE,
            payload: category
        }));
    }
};

export const editCategoryPrompt = (category) => (dispatch) => {
    Modal.prompt('Update category name', '',
        [
            {text: 'Cancel'},
            {
                text: 'Update',
                onPress: title => new Promise((resolve) => {
                    const model = {
                        id: category.id,
                        title
                    };

                    dispatch(editCategory(model));

                    dispatch(initActionPropagationToServer({
                        type: CATEGORY_UPDATE,
                        payload: model
                    }));

                    resolve();
                }),
            },
        ], 'default', category.title);
};

export const createCategoryPrompt = () => (dispatch) => {
    Modal.prompt('Create category', '',
        [
            {text: 'Cancel'},
            {
                text: 'Create',
                onPress: title => new Promise((resolve) => {
                    const model = {
                        id: uuid(),
                        title
                    };
                    dispatch(createCategory(model));

                    dispatch(initActionPropagationToServer({
                        type: CATEGORY_CREATE,
                        payload: model
                    }));

                    resolve();
                }),
            },
        ], 'default', null, ['Category name']);
};



