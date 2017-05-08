import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from './reducers'
import {setStore} from './helpers/store'
import App from './containers/app/App';
import {TaskListContainer} from './containers/task-list';
import EditTaskContainer from './containers/task-edit';
import './index.css';
import initialStoreState from './data'

const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
});

const store = createStore(reducer, initialStoreState, composeEnhancers(applyMiddleware(thunk)));
setStore(store);

ReactDOM.render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route
                    path=":activeCategoryId"
                    components={{
                        TaskContainer: TaskListContainer
                    }}
                />
                <Route
                    path=":activeCategoryId/:editTaskId"
                    components={{
                        TaskContainer: EditTaskContainer
                    }}
                />
            </Route>
        </Router>
    </Provider>
), document.getElementById('root'));