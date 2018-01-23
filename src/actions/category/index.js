import {createAction, createParallelActions} from '../../helpers/action';
import uuid from 'uuid/v4';
import {Modal} from 'antd-mobile';

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


export const deleteCategory = createParallelActions([TASK_DELETE_WITH_CATEGORY, CATEGORY_DELETE]);
export const createCategory = createAction(CATEGORY_ADD);
export const openCategory = createAction(CATEGORY_SET_ACTIVE);
export const editCategory = createAction(CATEGORY_EDIT);
export const goBack = createAction(CATEGORY_RESET_ACTIVE);
export const onSetSearchModeOn = createAction(CATEGORY_SET_SEARCH_MODE_ON);
export const onSetSearchModeOff = createAction(CATEGORY_SET_SEARCH_MODE_OFF);
export const onSearchChange = createAction(CATEGORY_SEARCH_STRING_UPDATE);


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



