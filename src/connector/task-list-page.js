import {connect} from 'react-redux';
import {taskList} from '../selectors/task-list-page';
import {
    goBack,
    deleteTask,
    editTask,
    createTask,
    onStatusChange
} from '../actions/task/index';

export const taskListPageConnector = connect(taskList, {
    goBack,
    deleteTask,
    editTask,
    createTask,
    onStatusChange
});
