import {store} from '../../store';
import {send} from '../../ws';
import {addTaskToSyncQueue, cleanTaskSyncQueue} from '../task';


export const wsTaskSyncRequest = (action) => () => {
    send(action);
    // TODO: error should be handled and operation should be returned back to the Set
};
export const initTaskSync = (action) => (dispatch) => {
    if(navigator.onLine){
        dispatch(wsTaskSyncRequest(action));
    } else{
        dispatch(addTaskToSyncQueue(action));
    }
};


export const syncRequest = () => {
    const state = store.getState();

    state.syncQueue.get('task').forEach(action => {
        store.dispatch(wsTaskSyncRequest(action.toJS()));
    });
    store.dispatch(cleanTaskSyncQueue());

    send({
        type: 'SYNC_CLIENT'
    });
};
