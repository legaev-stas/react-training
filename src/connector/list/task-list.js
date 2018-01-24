import {connect} from 'react-redux';
import {taskListSelector} from '../../selectors/list/task-list';
import {
    deleteTask,
    onStatusChange
} from '../../actions/task';
import {
    onSetActiveTask
} from '../../actions/ui-state';


export const taskListConnector = connect(taskListSelector, {
    deleteTask,
    editTask: onSetActiveTask,
    onStatusChange
});
