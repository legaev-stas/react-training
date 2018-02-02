import {store} from '../store';
import {syncRequest} from "../actions/sync-queue";

let ws;

const establishConnection = () => {
    ws = new WebSocket('ws://localhost:3001/');

    ws.addEventListener('open', sendSyncMessage);
    ws.addEventListener('message', dispatchServerAction);
    ws.addEventListener('close', establishDelayedConnection);
};

const terminateConnection = () => {
    if(ws){
        ws.removeEventListener('open', sendSyncMessage);
        ws.removeEventListener('message', dispatchServerAction);
        ws.removeEventListener('close', establishDelayedConnection);
        ws.close();
        ws = null;
    }
};

// connection event handlers
const sendSyncMessage = () => {
    store.dispatch(syncRequest());
};

const establishDelayedConnection = () => {
    terminateConnection();
    setTimeout(establishConnection, 10000);
};

const dispatchServerAction = e => store.dispatch(JSON.parse(e.data));

// public API
export const isReady = () => ws && ws.readyState === ws.OPEN;

export const sendActionToServer = (action) => {
    isReady() && ws.send(JSON.stringify(action));
};

export const connect = () => {
    if (navigator.onLine) {
        establishConnection();
    }

    window.addEventListener('online', establishConnection);
    window.addEventListener('offline', terminateConnection);
};
