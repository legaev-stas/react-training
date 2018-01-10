import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';

import 'antd-mobile/dist/antd-mobile.css';
import './styles.css';

import {store, persistor} from './store';
import TodoApp from './containers/App';

document.addEventListener('deviceready', () => {
    ReactDOM.render((
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <TodoApp/>
            </PersistGate>
        </Provider>
    ), document.getElementById('root'));
}, false);

