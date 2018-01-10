import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import storage from 'redux-persist/lib/storage'

import {setStore} from './helpers/store';

import category from './reducers/category';
import task from './reducers/task';


const reducer = combineReducers({
    category,
    task
});
const persistedReducer = persistReducer({
    transforms: [immutableTransform()],
    key: 'root',
    storage
}, reducer)


const composeEnhancers = composeWithDevTools({});
export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
setStore(store);
export const persistor = persistStore(store);