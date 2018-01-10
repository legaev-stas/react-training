import {createSimpleSelector, createSelector} from '../helpers/selector';
import {getState} from '../helpers/store';


const categoryStoreSlice = () => getState().category;
const categoryCollection = createSimpleSelector(categoryStoreSlice, 'collection');
const activeCategoryId = createSimpleSelector(categoryStoreSlice, 'active');
const taskStoreSlice = () => getState().task;
const taskCollection = createSimpleSelector(taskStoreSlice, 'collection');
const filterShowCompleted = createSimpleSelector(taskStoreSlice, 'filterShowCompleted');

export const taskList = createSelector([categoryCollection, taskCollection, activeCategoryId, filterShowCompleted],
    (categoryCollection, taskCollection, activeCategoryId, filterShowCompleted) => {
        const categoryTitle = categoryCollection.find(v => v.get('id') === activeCategoryId).get('title');
        let collection = taskCollection.filter(v => v.get('category') === activeCategoryId).toJS();

        collection = collection.map(task => {
            task.checked = task.completed;
            return task;
        });

        if(!filterShowCompleted){
            collection = collection.filter(task => !task.completed);
        }

        return {
            categoryTitle,
            activeCategoryId,
            collection,
            filterShowCompleted
        };
    });
