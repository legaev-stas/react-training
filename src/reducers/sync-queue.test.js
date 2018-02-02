import reducer from './sync-queue';
import {fromJS, is, List} from 'immutable';

import {
    SYNC_QUEUE_ADD_ACTION,
    SYNC_QUEUE_CLEAN
} from '../actions/sync-queue/constants';


let initialState;

beforeEach(() => {
    initialState = new List;
    initialState.push(fromJS({
        type: 'TASK_CREATE',
        payload: {
            category: '7e9e90ce-a044-49c9-8a2e-24b4653573b1',
            id: 'ec09e9e7-a044-49c9-8a2e-24b4653573b1',
            title: 'Initial Title',
            description: '',
            completed: false
        }
    }));
});

describe(`Sync-queue reducer should handle ${SYNC_QUEUE_ADD_ACTION} action`, () => {
    test('action(to be stored in queue) should be added to the queue as the last entity', () => {
        let actionToBeStoredInQueue = {
            type: 'CATEGORY_UPDATE',
            payload: {
                id: 'ec09e9e7-a044-49c9-8a2e-24b4653573b1',
                title: 'Updated Title'
            }
        };

        let action = {
            type: SYNC_QUEUE_ADD_ACTION,
            payload: actionToBeStoredInQueue
        };
        let modifiedState = reducer(initialState, action);

        expect(is(modifiedState.last(), fromJS(actionToBeStoredInQueue))).toBe(true);
    });
});

describe(`Sync-queue reducer should handle ${SYNC_QUEUE_CLEAN} action`, () => {
    test('action(to be stored in queue) should be added to the queue as the last entity', () => {
        let action = {
            type: SYNC_QUEUE_CLEAN
        };
        let modifiedState = reducer(initialState, action);

        expect(modifiedState.size).toBe(0);
    });
});
