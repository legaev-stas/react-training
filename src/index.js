import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension';

import reducer from './reducers'
import App from './containers/app/App';
import CategoryBarContainer from './containers/category-bar';
import TasksListContainer from './containers/task-list';
import EditTaskContainer from './containers/task-edit';
import './index.css';
import initialStoreState from './data'
import syncMultipleActions from './middleware/sync-multiple-actions';

const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
});

const store = createStore(reducer, initialStoreState, composeEnhancers(applyMiddleware(syncMultipleActions)));

ReactDOM.render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute components={{CategoryBarContainer: CategoryBarContainer}}/>
                <Route
                    path=":activeCategoryId"
                    components={{
                        CategoryBarContainer: CategoryBarContainer,
                        TasksListContainer: TasksListContainer
                    }}
                />
                <Route
                    path=":activeCategoryId/:editTaskId"
                    components={{
                        CategoryBarContainer: CategoryBarContainer,
                        EditTask: EditTaskContainer
                    }}
                />
            </Route>
        </Router>
    </Provider>
), document.getElementById('root'));