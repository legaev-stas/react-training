import {connect} from 'react-redux';
import {categoryListPageSelector} from '../selectors/category-list-page';
import {
    createCategoryPrompt,
    editCategoryPrompt,
    deleteCategoryConfirmation
} from '../actions/category/index';
import {
    onSetActiveCategory,
    onSetSearchModeOn,
    onSetSearchModeOff,
    onChangeSearchQuery
} from '../actions/ui-state/index';


export const categoryListPageConnector = connect(categoryListPageSelector, {
    editCategoryPrompt,
    deleteCategoryConfirmation,
    createCategoryPrompt,
    onSetActiveCategory,
    onSetSearchModeOn,
    onSetSearchModeOff,
    onChangeSearchQuery
});
