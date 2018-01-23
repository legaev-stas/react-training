import {createSimpleSelector, createSelector} from '../helpers/selector';
import {getState} from '../helpers/store';


const categoryStoreSlice = () => getState().category;
const categoryCollection = createSimpleSelector(categoryStoreSlice, 'collection');
const activeCategoryId = createSimpleSelector(categoryStoreSlice, 'active');
const taskStoreSlice = () => getState().task;
const filterShowCompleted = createSimpleSelector(taskStoreSlice, 'filterShowCompleted');


export const categoryTitleSelector = createSelector([categoryCollection, activeCategoryId],
    (categoryCollection, activeCategoryId) => {
        return categoryCollection.find(category => category.get('id') === activeCategoryId).get('title');
    });


export const taskListPageSelector = createSelector(
    [categoryTitleSelector, activeCategoryId],
    (categoryTitle, activeCategoryId) => ({
        categoryTitle,
        activeCategoryId
    })
);
