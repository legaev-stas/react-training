import {TaskList} from '../../components/tasks-list';
import {taskListConnector} from '../../connector/task-list';

export const TaskListContainer = taskListConnector(TaskList);
