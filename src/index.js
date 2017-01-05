import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import CategoryContainer from './components/category-container';
import './index.css';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute components={{CategoryContainer:CategoryContainer}}/>
            <Route path=":activeCategoryId" components={{CategoryContainer:CategoryContainer}}/>
        </Route>
    </Router>
), document.getElementById('root'));