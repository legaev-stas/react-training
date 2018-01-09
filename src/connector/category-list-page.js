import {connect} from 'react-redux';
import {categoryList} from '../selectors/category-list-page';
import {
    addCategory,
    editCategory,
    deleteCategory,
    openCategory
} from '../actions/category/index';

export const categoryListPageConnector = connect(categoryList, {
    editCategory,
    deleteCategory,
    openCategory,
    addCategory
});
