import {createSimpleSelector, createSelector} from '../helpers/selector';
import {getState} from '../helpers/store';


const categoryStoreSlice = () => getState().category;
const categoryCollection = createSimpleSelector(categoryStoreSlice, 'collection');
const activeCategoryId = createSimpleSelector(categoryStoreSlice, 'active');
const taskStoreSlice = () => getState().task;
const taskCollection = createSimpleSelector(taskStoreSlice, 'collection');

export const taskList = createSelector([categoryCollection, taskCollection, activeCategoryId],
    (categoryCollection, taskCollection, activeCategoryId) => {
        const categoryTitle = categoryCollection.find(v => v.get('id') === activeCategoryId).get('title');
        let collection = taskCollection.filter(v => v.get('category') === activeCategoryId).toJS();

        collection.map(model => {
            model.checked = model.completed;
            return model;
        });

        return {
            categoryTitle,
            activeCategoryId,
            collection
        };
    });
