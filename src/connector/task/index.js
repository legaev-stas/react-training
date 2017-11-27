import {connect} from 'react-redux';
import {taskList, taskEdit, tasksSection} from '../../selectors/task';
import {
    setNewTaskTitleValue,
    addTask,
    onEdit,
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
    onEdit: onEdit,
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

export const tasksSectionConnector = connect(tasksSection);
