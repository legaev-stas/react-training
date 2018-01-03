import {connect} from 'react-redux';
import {categoryList} from '../../selectors/category-page';
import {
    addCategory,
    editHandler,
    deleteHandler,
    openCategory
} from '../../actions/category';

export const categoryPageConnector = connect(categoryList, {
    editHandler: editHandler,
    deleteHandler: deleteHandler,
    openCategory,
    addCategory
});
