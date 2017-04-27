import {connect} from 'react-redux';
import {categoryForm, categoryList} from '../../selectors/category-bar';
import {addCategory, setNewCategoryTitleValue} from '../../actions/category';

export const addCategoryFormConnector = connect(categoryForm, {
    addCategory: addCategory,
    setNewCategoryTitleValue: setNewCategoryTitleValue
});

export const categoryListConnector = connect(categoryList, {
    addCategory: addCategory,
    setNewCategoryTitleValue: setNewCategoryTitleValue
});
