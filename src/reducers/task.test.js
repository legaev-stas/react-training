import reducer from './task';
import {fromJS, is} from 'immutable';

import {
    TASK_DELETE,
    TASK_CREATE,
    TASK_DESCRIPTION_CHANGE,
    TASK_CATEGORY_CHANGE,
    TASK_STATUS_CHANGE,
    TASK_TITLE_CHANGE
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

describe(`Task reducer should handle ${TASK_CATEGORY_CHANGE} action`, () => {
    test('task can change category it associated to', () => {
        let action = {
            type: TASK_CATEGORY_CHANGE,
            payload: {
                category: 'c2',
                id: 'id1'
            }
        };
        initialState = fromJS([{
                id: 'id1',
                title: 'Title 1',
                category: 'c1'
            }]);
        let expectedTask = fromJS({
            id: 'id1',
            title: 'Title 1',
            category: 'c2'
        });

        let modifiedState = reducer(initialState, action);

        expect(is(modifiedState.get(0), expectedTask)).toBe(true);
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


describe(`Category reducer should handle ${TASK_DESCRIPTION_CHANGE} action`, () => {
    test('Description of task found by id should be updated', () => {
        let description = 'new decription';
        let action = {
            type: TASK_DESCRIPTION_CHANGE,
            payload: {
                id: 'id1',
                description
            }
        };
        initialState = fromJS([{
                id: 'id1',
                title: 'Title 1',
                description: 'old description'
            }, {
                id: 'id2',
                title: 'Title 2',
                description: 'old description'
            }]);
        let modifiedState = reducer(initialState, action);

        expect(modifiedState.get(0).get('description')).toBe(description);
    });
});


describe(`Category reducer should handle ${TASK_STATUS_CHANGE} action`, () => {
    test('Completed status of task found by id should be updated', () => {
        let action = {
            type: TASK_STATUS_CHANGE,
            payload: {
                id: 'id2',
                completed: true
            }
        };
        initialState = fromJS([{
                id: 'id1',
                title: 'Title 1',
                completed: false
            }, {
                id: 'id2',
                title: 'Title 2',
                completed: false
            }]);
        let modifiedState = reducer(initialState, action);

        expect(modifiedState.get(1).get('completed')).toBe(true);
    });
});


describe(`Category reducer should handle ${TASK_TITLE_CHANGE} action`, () => {
    test('Title of task found by id should be updated', () => {
        const title = 'New Title'
        let action = {
            type: TASK_TITLE_CHANGE,
            payload: {
                id: 'id1',
                title
            }
        };
        initialState = fromJS([{
                id: 'id1',
                title: 'Title 1',
                completed: false
            }, {
                id: 'id2',
                title: 'Title 2',
                completed: false
            }]);
        let modifiedState = reducer(initialState, action);

        expect(modifiedState.get(0).get('title')).toBe(title);
    });
});
