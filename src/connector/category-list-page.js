import {connect} from 'react-redux';
import {categoryListPageSelector} from '../selectors/category-list-page';
import {
    createCategory,
    editCategory,
    deleteCategory,
    openCategory
} from '../actions/category/index';


export const categoryListPageConnector = connect(categoryListPageSelector, {
    editCategory,
    deleteCategory,
    openCategory,
    createCategory
});
