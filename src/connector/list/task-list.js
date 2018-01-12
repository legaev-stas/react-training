import {connect} from 'react-redux';
import {taskListSelector} from '../../selectors/list/task-list';
import {
    deleteTask,
    editTask,
    onStatusChange
} from '../../actions/task';


export const taskListConnector = connect(taskListSelector, {
    deleteTask,
    editTask,
    onStatusChange
});
