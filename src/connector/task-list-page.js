import {connect} from 'react-redux';
import {taskListPageSelector} from '../selectors/task-list-page';
import {
    createTask,
} from '../actions/task';
import {goBack} from '../actions/category';


export const taskListPageConnector = connect(taskListPageSelector, {
    goBack,
    createTask
});
