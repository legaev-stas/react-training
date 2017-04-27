import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension';

import reducer from './reducers'
import {setStore} from './helpers/store'
import App from './containers/app/App';
import TasksListContainer from './containers/task-list';
import EditTaskContainer from './containers/task-edit';
import './index.css';
import initialStoreState from './data'

const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
});

const store = createStore(reducer, initialStoreState, composeEnhancers());
setStore(store);

ReactDOM.render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route
                    path=":activeCategoryId"
                    components={{
                        TasksListContainer: TasksListContainer
                    }}
                />
                <Route
                    path=":activeCategoryId/:editTaskId"
                    components={{
                        EditTask: EditTaskContainer
                    }}
                />
            </Route>
        </Router>
    </Provider>
), document.getElementById('root'));