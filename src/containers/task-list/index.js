import { connect } from 'react-redux';
import TaskList from '../../components/tasks-list';
import {changeInputNewTaskTitle, addTask, toggleTaskStatus} from '../../actions/header';

const filterCollection = (state, ownProps) => {
    var collection = state.task.collection;
    var activeCategoryId = ownProps.params.activeCategoryId;

    return collection.filter(task => {
        return task.category === activeCategoryId &&
        (task.done ? state.filter.showDone : true) &&
        (state.filter.title ? task.title.indexOf(state.filter.title) !== -1 : true);
    });
}

const mapStateToProps = (state, ownProps) => {
    return {
        collection: filterCollection(state, ownProps),
        newTaskTitle: state.newTaskTitle
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeInputNewTaskTitle: (e) => {
            dispatch(changeInputNewTaskTitle(e));
        },
        addTask: (text) => {
            dispatch(addTask(text));
        },
        toggleTaskStatus: (text) => {
            dispatch(toggleTaskStatus(text));
        }
    }
}

const TaskListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskList);

export default TaskListContainer;
