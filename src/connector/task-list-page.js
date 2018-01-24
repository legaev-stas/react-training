import {connect} from 'react-redux';
import {taskListPageSelector} from '../selectors/task-list-page';
import {
    createTaskPrompt,
} from '../actions/task';
import {onUnsetActiveCategory} from '../actions/ui-state';


export const taskListPageConnector = connect(taskListPageSelector, {
    goBack: onUnsetActiveCategory,
    createTaskPrompt
});
