import {connect} from 'react-redux';
import CategoryBar from '../../components/category-bar';
import {addCategory, addNestedCategory, editHandler, deleteHandler, changeNewCategoryTitle} from '../../actions/category-bar';

const mapStateToProps = (state) => {
    return state.category
};

const mapDispatchToProps = (dispatch) => {
    return {
        addCategory: (text) => {
            dispatch(addCategory(text));
        },
        addNestedCategory: (text) => {
            dispatch(addNestedCategory(text));
        },
        editHandler: (text) => {
            dispatch(editHandler(text));
        },
        deleteHandler: (text) => {
            dispatch(deleteHandler(text));
        },
        changeNewCategoryTitle: (text) => {
            dispatch(changeNewCategoryTitle(text));
        }
    }
};

const CategoryBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryBar);

export default CategoryBarContainer;
