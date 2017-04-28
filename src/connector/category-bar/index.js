import {connect} from 'react-redux';
import {categoryForm, categoryList} from '../../selectors/category-bar';
import {addCategory, setNewCategoryTitleValue, addNestedCategory, editHandler, deleteHandler} from '../../actions/category';

export const addCategoryFormConnector = connect(categoryForm, {
    addCategory: addCategory,
    setNewCategoryTitleValue: setNewCategoryTitleValue
});

export const categoryListConnector = connect(categoryList, {
    addNestedCategory: addNestedCategory,
    editHandler: editHandler,
    deleteHandler: deleteHandler
});
