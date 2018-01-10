import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import 'antd-mobile/dist/antd-mobile.css';
import './styles.css';

import {store} from './store';
import TodoApp from './containers/App';


document.addEventListener('deviceready', () => {
    ReactDOM.render((
        <Provider store={store}>
            <TodoApp/>
        </Provider>
    ), document.getElementById('root'));
}, false);

