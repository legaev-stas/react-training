import {createSimpleSelector, createSelector} from '../helpers/selector';
import {getState} from '../helpers/store';


const categoryStoreSlice = () => getState().category;
const categoryCollection = createSimpleSelector(categoryStoreSlice, 'collection');
const activeCategoryId = createSimpleSelector(categoryStoreSlice, 'active');
const taskStoreSlice = () => getState().task;
const filterShowCompleted = createSimpleSelector(taskStoreSlice, 'filterShowCompleted');


const categoryTitle = createSelector([categoryCollection, activeCategoryId],
    (categoryCollection, activeCategoryId) => {
        return categoryCollection.find(v => v.get('id') === activeCategoryId).get('title');
    });


export const taskListPageSelector = createSelector(
    [categoryTitle, activeCategoryId],
    (categoryTitle, activeCategoryId) => ({
        categoryTitle,
        activeCategoryId
    })
);
