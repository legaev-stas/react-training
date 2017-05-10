import {TaskList} from '../../components/tasks-list';
import {TaskEdit} from '../../components/task-edit';
import {taskListConnector, taskEditConnector} from '../../connector/task';

export const TaskListContainer = taskListConnector(TaskList);
export const TaskEditContainer = taskEditConnector(TaskEdit);
