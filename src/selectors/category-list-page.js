import {createSimpleSelector, createSelector} from '../helpers/selector';
import {getState} from '../helpers/store';


const categoryStoreSlice = () => getState().category;
const categoryCollection = createSimpleSelector(categoryStoreSlice, 'collection');
const taskStoreSlice = () => getState().task;
const taskCollection = createSimpleSelector(taskStoreSlice, 'collection');


export const categoryList = createSelector([categoryCollection, taskCollection], (categoryCollection, taskCollection) => {
    let collection = categoryCollection.map(category => {
        let tasks = taskCollection.filter(task => task.get('category') === category.get('id'));
        let badge = tasks.filter(task => !task.get('completed')).size;

        return category.merge({
            badge,
            tasks
        });
    });

    return {collection};
});