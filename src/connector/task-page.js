import {connect} from 'react-redux';
import {taskPageSelector} from '../selectors/task-page';
import {
    goBack,
    onTitleChange,
    onDescriptionChange,
    onCategoryChange,
    onStatusChange
} from '../actions/task';


export const taskPageConnector = connect(taskPageSelector, {
    goBack,
    onTitleChange,
    onDescriptionChange,
    onCategoryChange,
    onStatusChange
});
