import {createSimpleSelector, createSelector} from '../helpers/selector';
import {getState} from '../helpers/store';


const categoryCollection = () => getState().category;

const uiStateSlice = () => getState().ui;
const activeCategory = createSimpleSelector(uiStateSlice, 'activeCategory');


export const categoryTitleSelector = createSelector([categoryCollection, activeCategory],
    (categoryCollection, activeCategory) => {
        return categoryCollection.find(category => category.get('id') === activeCategory).get('title');
    });


export const taskListPageSelector = createSelector(
    [categoryTitleSelector, activeCategory],
    (categoryTitle, activeCategory) => ({
        categoryTitle,
        activeCategory
    })
);
