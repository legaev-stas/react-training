import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import 'antd-mobile/dist/antd-mobile.css';
import './styles.css';

import reducer from './reducers'
import {setStore} from './helpers/store'
import TodoApp from './containers/App';
import initialStoreState from './data'


const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
});
const store = createStore(reducer, initialStoreState, composeEnhancers(applyMiddleware(thunk)));
setStore(store);


document.addEventListener('deviceready', () => {
    ReactDOM.render((
        <Provider store={store}>
            <TodoApp/>
        </Provider>
    ), document.getElementById('root'));
}, false);

