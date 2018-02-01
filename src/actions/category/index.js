import {createAction} from '../../helpers/action';
import uuid from 'uuid/v4';
import {Modal} from 'antd-mobile';

import {
    CATEGORY_CREATE,
    CATEGORY_UPDATE,
    CATEGORY_DELETE,
    CATEGORY_ADD_TO_SYNC_QUEUE,
    CATEGORY_CLEAN_SYNC_QUEUE
} from './constants';
import {initCategorySync} from "../ws";


export const deleteCategory = createAction(CATEGORY_DELETE);
export const createCategory = createAction(CATEGORY_CREATE);
export const editCategory = createAction(CATEGORY_UPDATE);

export const addCategoryToSyncQueue = createAction(CATEGORY_ADD_TO_SYNC_QUEUE);
export const cleanCategorySyncQueue = createAction(CATEGORY_CLEAN_SYNC_QUEUE);


export const deleteCategoryConfirmation = (category) => (dispatch) => {
    console.log(category)
    const heading = 'Delete Category';
    const message = `Are you sure? The category contains ${category.badge} uncompleted tasks`;

    if (category.badge) {
        Modal.alert(heading, message, [
            {text: 'Cancel', style: 'default'},
            {
                text: 'OK', onPress: () => {
                    dispatch(deleteCategory(category));
                    dispatch(initCategorySync({
                        type: CATEGORY_DELETE,
                        payload: category
                    }));
                }
            },
        ]);
    } else {
        dispatch(deleteCategory(category));
        dispatch(initCategorySync({
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

                    dispatch(initCategorySync({
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

                    dispatch(initCategorySync({
                        type: CATEGORY_CREATE,
                        payload: model
                    }));

                    resolve();
                }),
            },
        ], 'default', null, ['Category name']);
};



