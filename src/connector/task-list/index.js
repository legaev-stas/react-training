import {connect} from 'react-redux';
import {taskList} from '../../selectors/task-list';
import {setNewTaskTitleValue, addTask, toggleTaskStatus} from '../../actions/task';

export const taskListConnector = connect(taskList, {
    setNewTaskTitleValue: setNewTaskTitleValue,
    addTask: addTask,
    toggleTaskStatus: toggleTaskStatus
});