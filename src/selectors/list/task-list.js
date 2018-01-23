import {createSimpleSelector, createSelector} from '../../helpers/selector';
import {getState} from '../../helpers/store';
import {List} from 'immutable';


const categoryStoreSlice = () => getState().category;
const activeCategoryId = createSimpleSelector(categoryStoreSlice, 'active');
const taskStoreSlice = () => getState().task;
const taskCollection = createSimpleSelector(taskStoreSlice, 'collection');
const filterShowCompleted = createSimpleSelector(taskStoreSlice, 'filterShowCompleted');
const searchMode = createSimpleSelector(categoryStoreSlice, 'searchMode');
const search = createSimpleSelector(categoryStoreSlice, 'search');

export const taskListSelector = createSelector(
    [taskCollection, activeCategoryId, filterShowCompleted, searchMode, search],
    (taskCollection, activeCategoryId, filterShowCompleted, searchMode, search) => {
        let collection = new List;

        // search by title case
        if (searchMode && search) {
            collection = taskCollection.filter(task => task.get('title').indexOf(search) !== -1);
        } else if (activeCategoryId) {
            // search by active category
            collection = taskCollection.filter(task => task.get('category') === activeCategoryId);
        }

        if (!filterShowCompleted) {
            collection = collection.filter(task => !task.get('completed'));
        }

        return {collection};
    });
