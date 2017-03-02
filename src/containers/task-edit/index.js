import { connect } from 'react-redux';
import TaskEdit from '../../components/task-edit';
import {editTaskTitle, editTaskDescription, editTaskToggleStatus, updateTask} from '../../actions/task';

const mapStateToProps = (state, ownProps) => {
    return state.uiState.taskEdit;
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeTitle: (e) => {
            dispatch(editTaskTitle(e.target.value));
        },
        onChangeDescription: (e) => {
            dispatch(editTaskDescription(e.target.value));
        },
        onToggleStatus: (e) => {
            dispatch(editTaskToggleStatus(e.target.checked));
        },
        onSave: (e) => {
            debugger
            dispatch(updateTask());
        }
    }
}

const TaskEditContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskEdit);

export default TaskEditContainer;
