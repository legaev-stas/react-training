import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import reducer from './reducers'

import App from './containers/app/App';
import CategoryContainer from './components/category-container';
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
                <IndexRoute components={{CategoryContainer: CategoryContainer}}/>
                <Route
                    path=":activeCategoryId"
                    components={{
                        CategoryContainer: CategoryContainer,
                        TasksContainer: TasksContainer
                    }}
                />
                <Route
                    path=":activeCategoryId/:editTaskId"
                    components={{
                        CategoryContainer: CategoryContainer,
                        EditTask: EditTask
                    }}
                />
            </Route>
        </Router>
    </Provider>
), document.getElementById('root'));