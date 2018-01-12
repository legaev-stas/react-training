import {connect} from 'react-redux';
import {taskListPageSelector} from '../selectors/task-list-page';
import {
    createTaskPrompt,
} from '../actions/task';
import {goBack} from '../actions/category';


export const taskListPageConnector = connect(taskListPageSelector, {
    goBack,
    createTaskPrompt
});
