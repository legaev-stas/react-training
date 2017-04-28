import {createAction} from '../../helpers/action';
import uuid from 'uuid/v4';

import {
    CATEGORY_ADD,
    CATEGORY_ADD_NESTED,
    CATEGORY_EDIT,
    CATEGORY_DELETE,
    CATEGORY_TITLE_CHANGE
} from './constants';

import {
    CATEGORY_DELETE_TASKS
} from '../task/constants';


export const addCategory = (name) => {
    return {
        type: CATEGORY_ADD,
        payload: {
            id: uuid(),
            name: name,
            parent: null
        }
    };
};

export const addNestedCategory = (addToCategoryId) => {
    // TODO: rework browser modals with components
    const name = prompt('Please enter category-bar title');
    if (name) {
        return {
            type: CATEGORY_ADD_NESTED,
            payload: {
                id: uuid(),
                name: name,
                parent: addToCategoryId
            }
        };
    }
};

export const editHandler = (editCategoryId) => {
    // TODO: rework browser modals with components
    const name = prompt('Please enter category-bar title');
    if (name) {
        return {
            type: CATEGORY_EDIT,
            payload: {
                id: editCategoryId,
                name: name
            }
        };
    }
};
// TODO: create parallel action creator
export const deleteHandler = (payload) => {
    return dispatch => {
        dispatch({type: CATEGORY_DELETE_TASKS, payload});
        dispatch({type: CATEGORY_DELETE, payload});
    }
}
export const setNewCategoryTitleValue = createAction(CATEGORY_TITLE_CHANGE);
