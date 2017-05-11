import {connect} from 'react-redux';
import {taskList, taskEdit} from '../../selectors/task';
import {
    setNewTaskTitleValue,
    addTask,
    toggleTaskStatus,
    taskEditSave,
    taskEditCancel,
    setTempTaskData,
    updateTaskTitle,
    updateTaskStatus,
    updateTaskDescription
} from '../../actions/task';

export const taskListConnector = connect(taskList, {
    setNewTaskTitleValue: setNewTaskTitleValue,
    addTask: addTask,
    toggleTaskStatus: toggleTaskStatus
});

export const taskEditConnector = connect(taskEdit, {
    onCancel: taskEditCancel,
    onSave: taskEditSave,
    onDataUpdate: setTempTaskData,
    onChangeTitle: updateTaskTitle,
    updateTaskStatus: updateTaskStatus,
    onChangeDescription: updateTaskDescription
});
