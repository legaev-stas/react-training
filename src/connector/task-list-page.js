import {connect} from 'react-redux';
import {taskListPageSelector} from '../selectors/task-list-page';
import {
    deleteTask,
    editTask,
    createTask,
    onStatusChange
} from '../actions/task';
import {goBack} from '../actions/category';


export const taskListPageConnector = connect(taskListPageSelector, {
    goBack,
    deleteTask,
    editTask,
    createTask,
    onStatusChange
});
