import {createSimpleSelector, createSelector} from '../helpers/selector';
import {getState} from '../helpers/store';


const categoryStoreSlice = () => getState().category;
const categoryCollection = createSimpleSelector(categoryStoreSlice, 'collection');
const taskStoreSlice = () => getState().task;
const taskCollection = createSimpleSelector(taskStoreSlice, 'collection');

export const categoryList = createSelector([categoryCollection, taskCollection], (categoryCollection, taskCollection) => {
    taskCollection = taskCollection.toJS();
    categoryCollection = categoryCollection.toJS().map(category => {
        let tasks = taskCollection.filter(task => task.category === category.id);
        let uncompletedTasks = tasks.filter(task => !task.completed);

        category.badge = uncompletedTasks.length;
        return category;
    });

    return {collection: categoryCollection};
});