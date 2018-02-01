import {connect} from 'react-redux';
import {taskListSelector} from '../../selectors/list/task-list';
import {
    deleteTask,
    onTaskStatusChange
} from '../../actions/task';
import {
    onSetEditableTask
} from '../../actions/ui-state';


export const taskListConnector = connect(taskListSelector, {
    deleteTask,
    editableTask: onSetEditableTask,
    onStatusChange: onTaskStatusChange
});
