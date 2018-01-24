import {createSimpleSelector, createSelector} from '../../helpers/selector';
import {getState} from '../../helpers/store';
import {List} from 'immutable';


const uiStateSlice = () => getState().ui;
const activeCategory = createSimpleSelector(uiStateSlice, 'activeCategory');
const searchMode = createSimpleSelector(uiStateSlice, 'searchMode');
const searchQuery = createSimpleSelector(uiStateSlice, 'searchQuery');
const filterShowCompletedTasks = createSimpleSelector(uiStateSlice, 'filterShowCompletedTasks');
const taskStateSlice = () => getState().task;
const taskCollection = createSimpleSelector(taskStateSlice, 'collection');

export const taskListSelector = createSelector(
    [taskCollection, activeCategory, filterShowCompletedTasks, searchMode, searchQuery],
    (taskCollection, activeCategory, filterShowCompletedTasks, searchMode, searchQuery) => {
        let collection = new List;

        // searchQuery by title case
        if (searchMode && searchQuery) {
            collection = taskCollection.filter(task => task.get('title').indexOf(searchQuery) !== -1);
        } else if (activeCategory) {
            // searchQuery by active category
            collection = taskCollection.filter(task => task.get('category') === activeCategory);
        }

        if (!filterShowCompletedTasks) {
            collection = collection.filter(task => !task.get('completed'));
        }

        return {collection};
    });
