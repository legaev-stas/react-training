import {addNestedCategory, editHandler, deleteHandler} from '../../actions/category/index';
import {deleteAllTasksOfCategory} from '../../actions/task/index';


const mapDispatchToProps = (dispatch) => {
    return {
        addNestedCategory: (text) => {
            dispatch(addNestedCategory(text));
        },
        editHandler: (text) => {
            dispatch(editHandler(text));
        },
        deleteHandler: (id) => {
            dispatch(deleteAllTasksOfCategory(id));
            dispatch(deleteHandler(id));
        }
    }
};

