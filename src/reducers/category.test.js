import reducer from './category';
import {fromJS, is} from 'immutable';

import {
    CATEGORY_CREATE,
    CATEGORY_UPDATE,
    CATEGORY_DELETE
} from '../actions/category/constants';


let initialState;

beforeEach(() => {
    initialState = fromJS([]);
});

describe(`Category reducer should handle ${CATEGORY_CREATE} action`, () => {
    test('should not modify the state if payload.title is empty', () => {
        let action = {
            type: CATEGORY_CREATE,
            payload: {
                id: 'dummy-id',
                title: ' '
            }
        };
        let modifiedState = reducer(initialState, action);

        expect(initialState).toBe(modifiedState);
    });

    test('should create a new category and push it to the collection', () => {
        const payload = {
            id: 'dummy-id',
            title: 'New Title'
        };
        let action = {
            type: CATEGORY_CREATE,
            payload
        };
        let modifiedState = reducer(initialState, action);

        expect(modifiedState.size).toBe(1);
        expect(modifiedState.includes(fromJS(payload))).toBe(true);
    });
});


describe(`Category reducer should handle ${CATEGORY_UPDATE} action`, () => {
    test('should update "title" of category that is found by payload.id in the collection', () => {
        let action = {
            type: CATEGORY_UPDATE,
            payload: {
                id: 'id1',
                title: 'New Title 1'
            }
        };
        initialState = fromJS([{
            id: 'id1',
            title: 'Title 1'
        }, {
            id: 'id2',
            title: 'Title 2'
        }]);

        let modifiedState = reducer(initialState, action);

        expect(modifiedState.get(0).get('title')).toBe('New Title 1');
    });


    test('should not update "title" of category that is found by payload.id in the collection in case if payload.title is empty', () => {
        let action = {
            type: CATEGORY_UPDATE,
            payload: {
                id: 'id1',
                title: ''
            }
        };
        initialState = fromJS([{
            id: 'id1',
            title: 'Title 1'
        }, {
            id: 'id2',
            title: 'Title 2'
        }]);

        let modifiedState = reducer(initialState, action);

        expect(modifiedState.get(0).get('title')).toBe('Title 1');
    });


    test('reducer should not update the state if there is no entities found by payload.id in the collection', () => {
        let action = {
            type: CATEGORY_UPDATE,
            payload: {
                id: 'id3',
                title: 'Title 3'
            }
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


describe(`Category reducer should handle ${CATEGORY_DELETE} action`, () => {
    test('entity found by id should be dropped from the collection', () => {
        let action = {
            type: CATEGORY_DELETE,
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
