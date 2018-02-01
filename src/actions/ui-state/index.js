import {createAction} from '../../helpers/action';

import {
    UI_SET_ACTIVE_CATEGORY,
    UI_UNSET_ACTIVE_CATEGORY,
    UI_SET_EDITABLE_TASK,
    UI_UNSET_EDITABLE_TASK,
    UI_SET_SEARCH_MODE_ON,
    UI_SET_SEARCH_MODE_OFF,
    UI_SET_SEARCH_QUERY,
    UI_CHANGE_FILTER_SHOW_COMPLETED_TASK
} from './constants';
import {updateTask} from "../task";


export const onSetActiveCategory = createAction(UI_SET_ACTIVE_CATEGORY);
export const onUnsetActiveCategory = createAction(UI_UNSET_ACTIVE_CATEGORY);
export const onSetEditableTask = createAction(UI_SET_EDITABLE_TASK);
export const onUnsetEditableTask = createAction(UI_UNSET_EDITABLE_TASK);
export const onSetSearchModeOn = createAction(UI_SET_SEARCH_MODE_ON);
export const onSetSearchModeOff = createAction(UI_SET_SEARCH_MODE_OFF);
export const onChangeSearchQuery = createAction(UI_SET_SEARCH_QUERY);
export const onChangeFilterShowCompleted = createAction(UI_CHANGE_FILTER_SHOW_COMPLETED_TASK);




export const onLeaveEditTaskPage = () => (dispatch) => {
    dispatch(updateTask());
    dispatch(onUnsetEditableTask());
};