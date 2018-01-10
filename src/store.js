import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducers';
import {setStore} from './helpers/store';


const composeEnhancers = composeWithDevTools({});
export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
setStore(store);
