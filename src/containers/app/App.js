import {connect} from 'react-redux';
import App from '../../components/app/App';

const getProgress = (state) => {
    const order = state.task.order;
    const byId = state.task.byId;
    const taskNumber = order.length;
    const completeTaskNumber = order.map(id => byId[id]).filter(task => task.done).length;
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

