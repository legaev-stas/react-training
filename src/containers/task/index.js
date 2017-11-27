import React from 'react';

import {TaskList} from '../../components/tasks-list';
import {TaskEdit} from '../../components/task-edit';
import {taskListConnector, taskEditConnector, tasksSectionConnector} from '../../connector/task';

const TaskListContainer = taskListConnector(TaskList);
const TaskEditContainer = taskEditConnector(TaskEdit);


const TasksSection = ({activeCategoryId, activeTaskId}) => (
    <div>
        {activeCategoryId && (
            activeTaskId ?
                <TaskEditContainer></TaskEditContainer>
                :
                <TaskListContainer></TaskListContainer>
        )}
    </div>
);
export const TasksSectionContainer = tasksSectionConnector(TasksSection);
