import {createSimpleSelector, createSelector} from '../helpers/selector';
import {getState} from '../helpers/store';


const categoryCollection = () => getState().category;
const taskCollection = () => getState().task;
const uiStateSlice = () => getState().ui;
const searchMode = createSimpleSelector(uiStateSlice, 'searchMode');
const searchQuery = createSimpleSelector(uiStateSlice, 'searchQuery');


export const categoryListPageSelector = createSelector(
    [categoryCollection, taskCollection, searchMode, searchQuery],
    (categoryCollection, taskCollection, searchMode, searchQuery) => {
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
        searchQuery
    };
});