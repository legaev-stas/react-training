import reducer from './sync-queue';
import {fromJS, is, Map, List} from 'immutable';

import {
    TASK_ADD_TO_SYNC_QUEUE,
    TASK_CLEAN_SYNC_QUEUE
} from '../actions/task/constants';
import {
    CATEGORY_ADD_TO_SYNC_QUEUE,
    CATEGORY_CLEAN_SYNC_QUEUE
} from '../actions/category/constants';


let initialState;

beforeEach(() => {
    initialState = new Map;
    initialState = initialState.set('task', new List);
    initialState.update('task', list => list.push(fromJS({
        type: 'TASK_CREATE',
        payload: {
            category: '7e9e90ce-a044-49c9-8a2e-24b4653573b1',
            id: 'ec09e9e7-a044-49c9-8a2e-24b4653573b1',
            title: 'Initial Title',
            description: '',
            completed: false
        }
    })));

    initialState = initialState.set('category', new List);
    initialState.update('category', list => list.push(fromJS({
        type: 'CATEGORY_CREATE',
        payload: {
            id: 'ec09e9e7-a044-49c9-8a2e-24b4653573b1',
            title: 'Initial Title'
        }
    })));
});

describe(`Sync-queue reducer should handle ${CATEGORY_ADD_TO_SYNC_QUEUE} action`, () => {
    test('action(to be stored in queue) should be added to the queue as the last entity', () => {
        let actionToBeStoredInQueue = {
            type: 'CATEGORY_UPDATE',
            payload: {
                id: 'ec09e9e7-a044-49c9-8a2e-24b4653573b1',
                title: 'Updated Title'
            }
        };

        let action = {
            type: CATEGORY_ADD_TO_SYNC_QUEUE,
            payload: actionToBeStoredInQueue
        };
        let collection = reducer(initialState, action).get('category');

        expect(is(collection.last(), fromJS(actionToBeStoredInQueue))).toBe(true);
    });
});

describe(`Sync-queue reducer should handle ${CATEGORY_CLEAN_SYNC_QUEUE} action`, () => {
    test('action(to be stored in queue) should be added to the queue as the last entity', () => {
        let action = {
            type: CATEGORY_CLEAN_SYNC_QUEUE
        };
        let collection = reducer(initialState, action).get('category');

        expect(collection.size).toBe(0);
    });
});

describe(`Sync-queue reducer should handle ${TASK_ADD_TO_SYNC_QUEUE} action`, () => {
    test('action(to be stored in queue) should be added to the queue as the last entity', () => {
        let actionToBeStoredInQueue = {
            type: 'TASK_UPDATE',
            payload: {
                category: '7e9e90ce-a044-49c9-8a2e-24b4653573b1',
                id: 'ec09e9e7-a044-49c9-8a2e-24b4653573b1',
                title: 'Updated Title',
                description: 'New description',
                completed: true
            }
        };

        let action = {
            type: TASK_ADD_TO_SYNC_QUEUE,
            payload: actionToBeStoredInQueue
        };
        let collection = reducer(initialState, action).get('task');

        expect(is(collection.last(), fromJS(actionToBeStoredInQueue))).toBe(true);
    });
});


describe(`Sync-queue reducer should handle ${TASK_CLEAN_SYNC_QUEUE} action`, () => {
    test('action(to be stored in queue) should be added to the queue as the last entity', () => {
        let action = {
            type: TASK_CLEAN_SYNC_QUEUE
        };
        let collection = reducer(initialState, action).get('task');

        expect(collection.size).toBe(0);
    });
});