import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import reducer from './reducers'

import App from './containers/app/App';
import CategoryBarContainer from './containers/category-bar';
import TasksContainer from './components/tasks-container';
import EditTask from './components/task-edit';
import './index.css';
import initialStoreState from './data'

const store = createStore(reducer, initialStoreState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute components={{CategoryBarContainer: CategoryBarContainer}}/>
                <Route
                    path=":activeCategoryId"
                    components={{
                        CategoryBarContainer: CategoryBarContainer,
                        TasksContainer: TasksContainer
                    }}
                />
                <Route
                    path=":activeCategoryId/:editTaskId"
                    components={{
                        CategoryBarContainer: CategoryBarContainer,
                        EditTask: EditTask
                    }}
                />
            </Route>
        </Router>
    </Provider>
), document.getElementById('root'));