import {connect} from 'react-redux';
import {taskList} from '../selectors/task-list-page';
import {
    goBack,
} from '../actions/task/index';

export const taskListPageConnector = connect(taskList, {
    goBack
});
