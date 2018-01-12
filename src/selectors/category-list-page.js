import {createSimpleSelector, createSelector} from '../helpers/selector';
import {getState} from '../helpers/store';


const categoryStoreSlice = () => getState().category;
const categoryCollection = createSimpleSelector(categoryStoreSlice, 'collection');
const taskStoreSlice = () => getState().task;
const taskCollection = createSimpleSelector(taskStoreSlice, 'collection');
const searchMode = createSimpleSelector(categoryStoreSlice, 'searchMode');
const search = createSimpleSelector(categoryStoreSlice, 'search');


export const categoryListPageSelector = createSelector(
    [categoryCollection, taskCollection, searchMode, search],
    (categoryCollection, taskCollection, searchMode, search) => {
    let collection = categoryCollection.map(category => {
        let tasks = taskCollection.filter(task => task.get('category') === category.get('id'));
        let badge = tasks.filter(task => !task.get('completed')).size;

        return category.merge({
            badge,
            tasks
        });
    });

    return {
        collection,
        searchMode,
        search
    };
});