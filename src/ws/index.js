import {store} from '../store';
import {syncRequest} from "../actions/ws";

let ws;

const establishConnection = () => {
    ws = new WebSocket('ws://localhost:3001/');

    ws.addEventListener('open', syncRequest);
    ws.addEventListener('message', dispatchReduxAction);
    ws.addEventListener('close', establishDelayedConnection);
};

const terminateConnection = () => {
    if(ws){
        ws.removeEventListener('open', syncRequest);
        ws.removeEventListener('message', dispatchReduxAction);
        ws.removeEventListener('close', establishDelayedConnection);
        ws.close();
        ws = null;
    }
}

const establishDelayedConnection = () => {
    terminateConnection();
    setTimeout(establishConnection, 10000);
};

const dispatchReduxAction = e => store.dispatch(JSON.parse(e.data));

export const send = (action) => {
    ws && ws.send(JSON.stringify(action));
}

export const initWsSync = () => {
    if (navigator.onLine) {
        establishConnection();
    }

    window.addEventListener('online', establishConnection);
    window.addEventListener('offline', terminateConnection);
};
