import {createAction} from '../../helpers/action';
import uuid from 'uuid/v4';
import {Modal} from 'antd-mobile';

import {
    CATEGORY_ADD,
    CATEGORY_EDIT,
    CATEGORY_DELETE
} from './constants';


export const deleteCategory = createAction(CATEGORY_DELETE);
export const createCategory = createAction(CATEGORY_ADD);
export const editCategory = createAction(CATEGORY_EDIT);


export const deleteCategoryConfirmation = (category) => (dispatch) => {
    const heading = 'Delete Category';
    const message = `Are you sure? The category contains ${category.badge} uncompleted tasks`;

    if (category.badge) {
        Modal.alert(heading, message, [
            {text: 'Cancel', style: 'default'},
            {text: 'OK', onPress: () => dispatch(deleteCategory(category))},
        ]);
    } else {
        dispatch(deleteCategory(category));
    }
};

export const editCategoryPrompt = (category) => (dispatch) => {
    Modal.prompt('Update category name', '',
        [
            {text: 'Cancel'},
            {
                text: 'Update',
                onPress: title => new Promise((resolve) => {
                    dispatch(editCategory({
                        id: category.id,
                        title
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
                    dispatch(createCategory({
                        id: uuid(),
                        title
                    }));
                    resolve();
                }),
            },
        ], 'default', null, ['Category name']);
};



