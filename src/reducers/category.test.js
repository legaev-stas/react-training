import reducer from './category';
import {fromJS, is} from 'immutable';

import {
    CATEGORY_ADD,
    CATEGORY_EDIT,
    CATEGORY_DELETE,
    CATEGORY_SET_ACTIVE,
    CATEGORY_RESET_ACTIVE,
    CATEGORY_SET_SEARCH_MODE_ON,
    CATEGORY_SET_SEARCH_MODE_OFF,
    CATEGORY_SEARCH_STRING_UPDATE
} from '../actions/category/constants';

let initialState;

beforeEach(() => {
    initialState = fromJS({
        active: null,
        collection: [],
        searchMode: false,
        search: ''
    });
});

describe('Category reducer should handle CATEGORY_ADD action', () => {
    test('reducer should not modify the state if payload.title is empty', () => {
        let action = {
            type: CATEGORY_ADD,
            payload: {
                id: 'dummy-id',
                title: ' '
            }
        };
        let modifiedState = reducer(initialState, action);

        expect(initialState).toBe(modifiedState);
    });

    test('reducer should create a new category and push it to "collection"', () => {
        const payload = {
            id: 'dummy-id',
            title: 'New Title'
        };
        let action = {
            type: CATEGORY_ADD,
            payload
        };
        let modifiedState = reducer(initialState, action);

        expect(modifiedState.get('collection').size).toBe(1);
        expect(modifiedState.get('collection').includes(fromJS(payload))).toBe(true);
    });
});


describe('Category reducer should handle CATEGORY_EDIT action', () => {
    test('reducer should update "title" of category that is found by payload.id in the collection', () => {
        let action = {
            type: CATEGORY_EDIT,
            payload: {
                id: 'id1',
                title: 'New Title 1'
            }
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

        expect(modifiedState.get('collection').get(0).get('title')).toBe('New Title 1');
    });


    test('reducer should not update "title" of category that is found by payload.id in the collection in case if payload.title is empty', () => {
        let action = {
            type: CATEGORY_EDIT,
            payload: {
                id: 'id1',
                title: ''
            }
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

        expect(modifiedState.get('collection').get(0).get('title')).toBe('Title 1');
    });


    test('reducer should not update the state if there is no entities found by payload.id in the collection', () => {
        let action = {
            type: CATEGORY_EDIT,
            payload: {
                id: 'id3',
                title: 'Title 3'
            }
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


describe('Category reducer should handle CATEGORY_DELETE action', () => {
    test('entity found by id should be dropped from the collection', () => {
        let action = {
            type: CATEGORY_DELETE,
            payload: {id:'id1'}
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
            type: CATEGORY_DELETE,
            payload: {id:'id3'}
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


describe('Category reducer should handle CATEGORY_SET_ACTIVE action', () => {
    test('category id (payload value) should be set to state.active', () => {
        const id = 'id1';
        let action = {
            type: CATEGORY_SET_ACTIVE,
            payload: {id}
        };

        let modifiedState = reducer(initialState, action);

        expect(modifiedState.get('active')).toBe(id);
    });
});


describe('Category reducer should handle CATEGORY_RESET_ACTIVE action', () => {
    test('state.active should be set to null', () => {
        let action = {
            type: CATEGORY_RESET_ACTIVE
        };

        let modifiedState = reducer(initialState, action);

        expect(modifiedState.get('active')).toBe(null);
    });
});


describe('Category reducer should handle CATEGORY_SET_SEARCH_MODE_ON action', () => {
    test('state.searchMode should be set to true', () => {
        let action = {
            type: CATEGORY_SET_SEARCH_MODE_ON
        };

        let modifiedState = reducer(initialState, action);

        expect(modifiedState.get('searchMode')).toBe(true);
    });
});


describe('Category reducer should handle CATEGORY_SET_SEARCH_MODE_OFF action', () => {
    test('state.searchMode should be set to false and state.search should be set to empty string', () => {
        let action = {
            type: CATEGORY_SET_SEARCH_MODE_OFF
        };

        let modifiedState = reducer(initialState, action);

        expect(modifiedState.get('searchMode')).toBe(false);
        expect(modifiedState.get('search')).toBe('');
    });
});


describe('Category reducer should handle CATEGORY_SEARCH_STRING_UPDATE action', () => {
    test('state.search should be set to value from payload', () => {
        const payload = 'query';
        let action = {
            type: CATEGORY_SEARCH_STRING_UPDATE,
            payload
        };

        let modifiedState = reducer(initialState, action);

        expect(modifiedState.get('search')).toBe(payload);
    });
});
