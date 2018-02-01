import {store} from '../../store';
import {send} from '../../ws';
import {addTaskToSyncQueue, cleanTaskSyncQueue} from '../task';
import {addCategoryToSyncQueue, cleanCategorySyncQueue} from '../category';


export const wsSyncRequest = (action) => () => {
    send(action);
    // TODO: error should be handled and operation should be returned back to the Set
};
export const initTaskSync = (action) => (dispatch) => {
    if(navigator.onLine){
        dispatch(wsSyncRequest(action));
    } else{
        dispatch(addTaskToSyncQueue(action));
    }
};
export const initCategorySync = (action) => (dispatch) => {
    if(navigator.onLine){
        dispatch(wsSyncRequest(action));
    } else{
        dispatch(addCategoryToSyncQueue(action));
    }
};


export const syncRequest = () => {
    const state = store.getState();

    state.syncQueue.get('task').forEach(action => {
        store.dispatch(wsSyncRequest(action.toJS()));
    });
    store.dispatch(cleanTaskSyncQueue());

    state.syncQueue.get('category').forEach(action => {
        store.dispatch(wsSyncRequest(action.toJS()));
    });
    store.dispatch(cleanCategorySyncQueue());

    send({
        type: 'SYNC_CLIENT'
    });
};
