import {connect} from 'react-redux';
import {taskList} from '../selectors/task-list-page';
import {
    deleteTask,
    editTask,
    createTask,
    onStatusChange,
    onFilterChange
} from '../actions/task';
import {goBack} from '../actions/category';


export const taskListPageConnector = connect(taskList, {
    goBack,
    deleteTask,
    editTask,
    createTask,
    onStatusChange,
    onFilterChange
});
