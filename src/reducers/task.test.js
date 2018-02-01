import reducer from './task';
import {fromJS, is} from 'immutable';

import {
    TASK_DELETE,
    TASK_CREATE,
} from '../actions/task/constants';
import {
    CATEGORY_DELETE
} from '../actions/category/constants';


let initialState;

beforeEach(() => {
    initialState = fromJS([]);
});

describe(`Task reducer should handle ${TASK_DELETE} action`, () => {
    test('should find entity by id and dropped it from the collection', () => {
        let action = {
            type: TASK_DELETE,
            payload: {id: 'id1'}
        };
        initialState = fromJS([{
                id: 'id1',
                title: 'Title 1'
            }, {
                id: 'id2',
                title: 'Title 2'
            }]);

        let expectedCollection = fromJS([{
            id: 'id2',
            title: 'Title 2'
        }]);

        let modifiedState = reducer(initialState, action);

        expect(is(modifiedState, expectedCollection)).toBe(true);
    });


    test('state is not updated in case entity is not found', () => {
        let action = {
            type: TASK_DELETE,
            payload: {id: 'id3'}
        };
        initialState = fromJS([{
                id: 'id1',
                title: 'Title 1'
            }, {
                id: 'id2',
                title: 'Title 2'
            }]);

        let modifiedState = reducer(initialState, action);

        expect(initialState).toBe(modifiedState);
    });
});

describe(`Task reducer should handle ${CATEGORY_DELETE} action`, () => {
    test('tasks found by category id should be dropped from the collection', () => {
        let action = {
            type: CATEGORY_DELETE,
            payload: {id: 'c1'}
        };
        initialState = fromJS([{
                id: 'id1',
                title: 'Title 1',
                category: 'c1'
            }, {
                id: 'id2',
                title: 'Title 2',
                category: 'c1'
            }, {
                id: 'id3',
                title: 'Title 3',
                category: 'c2'
            }]);
        let expectedCollection = fromJS([{
            id: 'id3',
            title: 'Title 3',
            category: 'c2'
        }]);

        let modifiedState = reducer(initialState, action);

        expect(is(modifiedState, expectedCollection)).toBe(true);
    });


    test('state is not updated in case category does not have any associated task', () => {
        let action = {
            type: CATEGORY_DELETE,
            payload: {id: 'id3'}
        };
        initialState = fromJS([{
                id: 'id1',
                title: 'Title 1'
            }, {
                id: 'id2',
                title: 'Title 2'
            }]);

        let modifiedState = reducer(initialState, action);

        expect(initialState).toBe(modifiedState);
    });
});


describe(`Category reducer should handle ${TASK_CREATE} action`, () => {
    test('state should not be modified if payload.title is empty', () => {
        let action = {
            type: TASK_CREATE,
            payload: {
                id: 'dummy-id',
                title: ' '
            }
        };
        let modifiedState = reducer(initialState, action);

        expect(initialState).toBe(modifiedState);
    });

    test('a new task should be added to the collection', () => {
        const payload = {
            id: 'dummy-id',
            title: 'New Title'
        };
        let action = {
            type: TASK_CREATE,
            payload
        };
        let modifiedState = reducer(initialState, action);

        expect(modifiedState.size).toBe(1);
        expect(modifiedState.includes(fromJS(payload))).toBe(true);
    });
});
