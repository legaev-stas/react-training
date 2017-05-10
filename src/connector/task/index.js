import {connect} from 'react-redux';
import {taskList, taskEdit} from '../../selectors/task';
import {
    setNewTaskTitleValue,
    addTask,
    toggleTaskStatus,
    taskEditTitleChange,
    taskEditDescriptionChange,
    taskEditStatusToggle,
    taskEditSave
} from '../../actions/task';

export const taskListConnector = connect(taskList, {
    setNewTaskTitleValue: setNewTaskTitleValue,
    addTask: addTask,
    toggleTaskStatus: toggleTaskStatus
});

export const taskEditConnector = connect(taskEdit, {
    onChangeTitle: taskEditTitleChange,
    onChangeDescription: taskEditDescriptionChange,
    onToggleStatus: taskEditStatusToggle,
    onSave: taskEditSave
});