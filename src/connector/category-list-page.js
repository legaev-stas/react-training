import {connect} from 'react-redux';
import {categoryListPageSelector} from '../selectors/category-list-page';
import {
    createCategoryPrompt,
    editCategoryPrompt,
    deleteCategoryConfirmation,
    openCategory,
    onSetSearchModeOn,
    onSetSearchModeOff,
    onSearchChange
} from '../actions/category/index';


export const categoryListPageConnector = connect(categoryListPageSelector, {
    editCategoryPrompt,
    deleteCategoryConfirmation,
    openCategory,
    createCategoryPrompt,
    onSetSearchModeOn,
    onSetSearchModeOff,
    onSearchChange
});
