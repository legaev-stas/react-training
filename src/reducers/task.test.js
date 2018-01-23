import reducer from './task';
import {fromJS, is} from 'immutable';

import {
    TASK_DELETE,
    TASK_CREATE,
    TASK_DELETE_WITH_CATEGORY,
    TASK_EDIT,
    TASK_RESET_ACTIVE,
    TASK_DESCRIPTION_CHANGE,
    TASK_CATEGORY_CHANGE,
    TASK_FILTER_CHANGE,
    TASK_STATUS_CHANGE,
    TASK_TITLE_CHANGE
} from '../actions/task/constants';


let initialState;

beforeEach(() => {
    initialState = fromJS({
        active: null,
        filterShowCompleted: true,
        collection: []
    });
});

describe(`Task reducer should handle ${TASK_DELETE} action`, () => {
    test('entity found by id should be dropped from the collection', () => {
        let action = {
            type: TASK_DELETE,
            payload: {id: 'id1'}
        };
        initialState = initialState.update('collection', () => {
            return fromJS([{
                id: 'id1',
                title: 'Title 1'
            }, {
                id: 'id2',
                title: 'Title 2'
            }])
        });
        let expectedCollection = fromJS([{
            id: 'id2',
            title: 'Title 2'
        }]);

        let modifiedState = reducer(initialState, action);

        expect(is(modifiedState.get('collection'), expectedCollection)).toBe(true);
    });


    test('state is not updated in case entity is not found', () => {
        let action = {
            type: TASK_DELETE,
            payload: {id: 'id3'}
        };
        initialState = initialState.update('collection', () => {
            return fromJS([{
                id: 'id1',
                title: 'Title 1'
            }, {
                id: 'id2',
                title: 'Title 2'
            }])
        });

        let modifiedState = reducer(initialState, action);

        expect(initialState).toBe(modifiedState);
    });
});

describe(`Task reducer should handle ${TASK_DELETE_WITH_CATEGORY} action`, () => {
    test('tasks found by category id should be dropped from the collection', () => {
        let action = {
            type: TASK_DELETE_WITH_CATEGORY,
            payload: {category: 'c1'}
        };
        initialState = initialState.update('collection', () => {
            return fromJS([{
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
            }])
        });
        let expectedCollection = fromJS([{
            id: 'id3',
            title: 'Title 3',
            category: 'c2'
        }]);

        let modifiedState = reducer(initialState, action);

        expect(is(modifiedState.get('collection'), expectedCollection)).toBe(true);
    });


    test('state is not updated in case category does not have any associated task', () => {
        let action = {
            type: TASK_DELETE_WITH_CATEGORY,
            payload: {category: 'id3'}
        };
        initialState = initialState.update('collection', () => {
            return fromJS([{
                id: 'id1',
                title: 'Title 1'
            }, {
                id: 'id2',
                title: 'Title 2'
            }])
        });

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
        initialState = initialState.update('collection', () => {
            return fromJS([{
                id: 'id1',
                title: 'Title 1',
                category: 'c1'
            }])
        });
        let expectedTask = fromJS({
            id: 'id1',
            title: 'Title 1',
            category: 'c2'
        });

        let modifiedState = reducer(initialState, action);

        expect(is(modifiedState.get('collection').get(0), expectedTask)).toBe(true);
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

        expect(modifiedState.get('collection').size).toBe(1);
        expect(modifiedState.get('collection').includes(fromJS(payload))).toBe(true);
    });
});

describe(`Category reducer should handle ${TASK_EDIT} action`, () => {
    test('task ID should be set as active in appropriate state field', () => {
        let id = 'dummy-id';
        let action = {
            type: TASK_EDIT,
            payload: {id}
        };
        let modifiedState = reducer(initialState, action);

        expect(modifiedState.get('active')).toBe(id);
    });
});


describe(`Category reducer should handle ${TASK_RESET_ACTIVE} action`, () => {
    test('active task ID should be removed from appropriate state field', () => {
        let action = {
            type: TASK_RESET_ACTIVE
        };
        let modifiedState = reducer(initialState, action);

        expect(modifiedState.get('active')).toBe(null);
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
        initialState = initialState.update('collection', () => {
            return fromJS([{
                id: 'id1',
                title: 'Title 1',
                description: 'old description'
            }, {
                id: 'id2',
                title: 'Title 2',
                description: 'old description'
            }])
        });
        let modifiedState = reducer(initialState, action);

        expect(modifiedState.get('collection').get(0).get('description')).toBe(description);
    });
});


describe(`Category reducer should handle ${TASK_FILTER_CHANGE} action`, () => {
    test('ShowCompleted Tasks filter is updated accordingly to the value', () => {
        let action = {
            type: TASK_FILTER_CHANGE,
            payload: false
        };
        let modifiedState = reducer(initialState, action);

        expect(modifiedState.get('filterShowCompleted')).toBe(false);
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
        initialState = initialState.update('collection', () => {
            return fromJS([{
                id: 'id1',
                title: 'Title 1',
                completed: false
            }, {
                id: 'id2',
                title: 'Title 2',
                completed: false
            }])
        });
        let modifiedState = reducer(initialState, action);

        expect(modifiedState.get('collection').get(1).get('completed')).toBe(true);
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
        initialState = initialState.update('collection', () => {
            return fromJS([{
                id: 'id1',
                title: 'Title 1',
                completed: false
            }, {
                id: 'id2',
                title: 'Title 2',
                completed: false
            }])
        });
        let modifiedState = reducer(initialState, action);

        expect(modifiedState.get('collection').get(0).get('title')).toBe(title);
    });
});

