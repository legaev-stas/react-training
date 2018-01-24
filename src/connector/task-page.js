import {connect} from 'react-redux';
import {taskPageSelector} from '../selectors/task-page';
import {
    onTitleChange,
    onDescriptionChange,
    onCategoryChange,
    onStatusChange
} from '../actions/task';
import {onUnsetActiveTask} from '../actions/ui-state';


export const taskPageConnector = connect(taskPageSelector, {
    goBack: onUnsetActiveTask,
    onTitleChange,
    onDescriptionChange,
    onCategoryChange,
    onStatusChange
});
