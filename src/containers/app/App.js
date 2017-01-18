import {connect} from 'react-redux';
import App from '../../components/app/App';

const getProgress = (state) => {
    const taskNumber = state.task.collection.length;
    const completeTaskNumber = state.task.collection.filter((task) => task.done).length;
    return completeTaskNumber/taskNumber;
}

const mapStateToProps = (state) => {
    return {
        completionProgress: getProgress(state)
    }
};

const AppContainer = connect(
    mapStateToProps
)(App);

export default AppContainer;

