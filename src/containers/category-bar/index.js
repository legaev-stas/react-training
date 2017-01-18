import {connect} from 'react-redux';
import CategoryBar from '../../components/category-bar';
import {addCategory, addNestedCategory, editHandler, initialDeleteHandler, changeNewCategoryTitle} from '../../actions/category-bar';

const mapStateToProps = (state) => {
    return {
        collection: state.category.collection,
        addCategoryTitle: state.addCategoryTitle
    }
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
        deleteHandler: (id) => {
            dispatch(initialDeleteHandler(id));
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
