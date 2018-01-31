import {store} from '../store';
import {syncRequest} from "../actions/ws";
let ws;

const establishConnection = () => {
   ws = new WebSocket('ws://localhost:3001/');

    ws.addEventListener('open', syncRequest);

    // ws.addEventListener('close', () => {});
    ws.addEventListener('error', establishConnection);

    ws.addEventListener('message', (e) => {
        store.dispatch(JSON.parse(e.data));
    });
};

export const send = (action) => {
    ws.send(JSON.stringify(action));
}

export const initWsSync = () => {
    if(navigator.onLine){
        establishConnection();
    }

    window.addEventListener('online',  establishConnection);
// window.addEventListener('offline', ()=> {console.log('offline')});
};

// TODO: connection auto re-istablishement