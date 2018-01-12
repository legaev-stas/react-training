import {TaskList} from '../../components/list/task-list';
import {taskListConnector} from '../../connector/list/task-list';
export const TaskListContainer = taskListConnector(TaskList);