import {createSimpleSelector, createSelector} from '../../helpers/selector';
import {getState} from '../../helpers/store'

const state = (state = getState()) => state;

const categoryStoreSlice = createSimpleSelector(state, 'category');
const activeCategoryId = createSimpleSelector(categoryStoreSlice, 'active');
const tasksStoreSlice = createSimpleSelector(state, 'task');
const activeTaskId = createSimpleSelector(tasksStoreSlice, 'active');
const tasksEditSlice = createSelector(tasksStoreSlice, tasksStoreSlice => tasksStoreSlice.getIn(['ui', 'taskEdit']));
const newTaskTitle = createSelector(tasksStoreSlice, tasksStoreSlice => tasksStoreSlice.getIn(['ui', 'newTaskTitle']));
const tasksMap = createSimpleSelector(tasksStoreSlice, 'byId');
const tasksOrder = createSimpleSelector(tasksStoreSlice, 'order');
const filterShowDone = createSelector(tasksStoreSlice, tasksStoreSlice => tasksStoreSlice.getIn(['ui', 'filter', 'showDone']));
const filterTitle = createSelector(tasksStoreSlice, tasksStoreSlice => tasksStoreSlice.getIn(['ui', 'filter', 'title']));

export const taskEdit = createSelector([tasksEditSlice, tasksMap, activeTaskId],
    (tasksEditSlice, tasksMap, activeTaskId) => {

        if (!activeTaskId) {
            return {};
        }

        if (tasksEditSlice) {
            return tasksEditSlice.toJS();
        }

        return tasksMap.get(activeTaskId).toJS();
    });

const filteredTaskListByCategory = createSelector([activeCategoryId, tasksOrder, tasksMap, filterShowDone, filterTitle],
    (activeCategoryId, tasksOrder, tasksMap, filterShowDone, filterTitle) => {

        tasksOrder = tasksOrder.toJS();
        tasksMap = tasksMap.toJS();

        let filteredTaskIds = tasksOrder.filter(id => {
            let task = tasksMap[id];

            return task.category === activeCategoryId &&
                (task.done ? filterShowDone : true) &&
                (filterTitle ? task.title.toLocaleLowerCase().indexOf(filterTitle.toLocaleLowerCase()) !== -1 : true);
        });

        return filteredTaskIds.map(id => {
            return tasksMap[id];
        });
    });

export const taskList = createSelector([activeCategoryId, newTaskTitle, filteredTaskListByCategory],
    (activeCategoryId, newTaskTitle, filteretTaskListByCategory) => {

        return {
            newTaskTitle,
            activeCategoryId,
            collection: filteretTaskListByCategory
        }
    });

export const tasksSection = createSelector([activeCategoryId, activeTaskId],
    (activeCategoryId, activeTaskId) => {
        return {
            activeCategoryId,
            activeTaskId
        }
    });
