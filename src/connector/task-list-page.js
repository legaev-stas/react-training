import {connect} from 'react-redux';
import {taskList,taskList2} from '../selectors/task-list-page';
import {
    deleteTask,
    editTask,
    createTask,
    onStatusChange,
    onFilterChange
} from '../actions/task';
import {goBack} from '../actions/category';


export const taskListPageConnector = connect(taskList2, {
    goBack,
    deleteTask,
    editTask,
    createTask,
    onStatusChange,
    onFilterChange
});
