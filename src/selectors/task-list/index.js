import {createSimpleSelector, createSelector} from '../../helpers/selector';
import {getState} from '../../helpers/store'

const state = (state = getState()) => state;

const activeCategoryId = (state, props) => props.params.activeCategoryId;
const tasksStoreSlice = createSimpleSelector(state, 'task');
const newTaskTitle = createSelector(tasksStoreSlice, tasksStoreSlice => tasksStoreSlice.getIn(['ui', 'newTaskTitle']));
const tasksMap = createSimpleSelector(tasksStoreSlice, 'byId');
const tasksOrder = createSimpleSelector(tasksStoreSlice, 'order');
const filterShowDone = createSelector(tasksStoreSlice, tasksStoreSlice => tasksStoreSlice.getIn(['ui', 'filter', 'showDone']));
const filterTitle = createSelector(tasksStoreSlice, tasksStoreSlice => tasksStoreSlice.getIn(['ui', 'filter', 'title']));

const filteretTaskListByCategory = createSelector([activeCategoryId, tasksOrder, tasksMap, filterShowDone, filterTitle],
    (activeCategoryId, tasksOrder, tasksMap, filterShowDone, filterTitle) => {

        tasksOrder = tasksOrder.toJS();
        tasksMap = tasksMap.toJS();

        var filteredTaskIds = tasksOrder.filter(id => {
            var task = tasksMap[id];

            return task.category === activeCategoryId &&
                (task.done ? filterShowDone : true) &&
                (filterTitle ? task.title.toLocaleLowerCase().indexOf(filterTitle.toLocaleLowerCase()) !== -1 : true);
        });

        return filteredTaskIds.map(id => {
            return tasksMap[id];
        });
    });

export const taskList = createSelector([newTaskTitle, filteretTaskListByCategory],
    (newTaskTitle, filteretTaskListByCategory) => {

        return {
            newTaskTitle,
            collection: filteretTaskListByCategory
        }
    });
