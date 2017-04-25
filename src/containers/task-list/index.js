import { connect } from 'react-redux';
import TaskList from '../../components/tasks-list';
import {setNewTaskTitleValue, addTask, toggleTaskStatus} from '../../actions/task/index';

const filterCollection = (state, ownProps) => {
    var byId = state.task.byId;
    var order = state.task.order;
    var filterShowDone = state.uiState.filter.showDone;
    var filterTitle = state.uiState.filter.title;
    var activeCategoryId = ownProps.params.activeCategoryId;

    var filteredTaskIds = order.filter(id => {
        var task = byId[id];

        return task.category === activeCategoryId &&
            (task.done ? filterShowDone : true) &&
            (filterTitle ? task.title.toLocaleLowerCase().indexOf(filterTitle.toLocaleLowerCase()) !== -1 : true);
    });

    return filteredTaskIds.map(id => {
        return byId[id];
    });
}

const mapStateToProps = (state, ownProps) => {
    return {
        collection: filterCollection(state, ownProps),
        newTaskTitle: state.uiState.newTaskTitle
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setNewTaskTitleValue: (e) => {
            dispatch(setNewTaskTitleValue(e.target.value));
        },
        addTask: (categoryId, title) => {
            dispatch(addTask(categoryId, title));
            dispatch(setNewTaskTitleValue(''));
        },
        toggleTaskStatus: (id) => {
            dispatch(toggleTaskStatus(id));
        }
    }
}

const TaskListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskList);

export default TaskListContainer;
