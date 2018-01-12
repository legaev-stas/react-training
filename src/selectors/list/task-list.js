import {createSimpleSelector, createSelector} from '../../helpers/selector';
import {getState} from '../../helpers/store';


const categoryStoreSlice = () => getState().category;
const activeCategoryId = createSimpleSelector(categoryStoreSlice, 'active');
const taskStoreSlice = () => getState().task;
const taskCollection = createSimpleSelector(taskStoreSlice, 'collection');
const filterShowCompleted = createSimpleSelector(taskStoreSlice, 'filterShowCompleted');


export const taskListSelector = createSelector([taskCollection, activeCategoryId, filterShowCompleted],
    (taskCollection, activeCategoryId, filterShowCompleted) => {
        let collection = taskCollection.filter(task => task.get('category') === activeCategoryId);

        if (!filterShowCompleted) {
            collection = collection.filter(task => !task.get('completed'));
        }

        return {collection};
    });
