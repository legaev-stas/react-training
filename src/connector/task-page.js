import {connect} from 'react-redux';
import {taskPageSelector} from '../selectors/task-page';
import {
    onEditableTaskTitleChange,
    onEditableTaskDescriptionChange,
    onEditableTaskCategoryChange,
    onEditableTaskStatusChange
} from '../actions/task';
import {onLeaveEditTaskPage} from '../actions/ui-state';


export const taskPageConnector = connect(taskPageSelector, {
    goBack: onLeaveEditTaskPage,
    onTitleChange: onEditableTaskTitleChange,
    onDescriptionChange: onEditableTaskDescriptionChange,
    onCategoryChange: onEditableTaskCategoryChange,
    onStatusChange: onEditableTaskStatusChange
});
