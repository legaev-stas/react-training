import {sendActionToServer, isReady} from '../../ws';
import {createAction} from "../../helpers/action";
import {SYNC_QUEUE_ADD_ACTION, SYNC_QUEUE_CLEAN} from './constants';


export const addActionToSyncQueue = createAction(SYNC_QUEUE_ADD_ACTION);
export const cleanSyncQueue = createAction(SYNC_QUEUE_CLEAN);

export const initActionPropagationToServer = (action) => (dispatch) => {
    if(isReady()){
        sendActionToServer(action);
    } else{
        dispatch(addActionToSyncQueue(action));
    }
};


export const syncRequest = () => (dispatch, getState) => {
    getState().syncQueue.forEach(action => {
        sendActionToServer(action.toJS());
    });

    dispatch(cleanSyncQueue());

    sendActionToServer({
        type: 'SYNC_CLIENT'
    });
};
