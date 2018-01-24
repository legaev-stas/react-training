import reducer from './ui-state';
import {fromJS} from 'immutable';

import {
    UI_SET_ACTIVE_CATEGORY,
    UI_UNSET_ACTIVE_CATEGORY,
    UI_SET_ACTIVE_TASK,
    UI_UNSET_ACTIVE_TASK,
    UI_SET_SEARCH_MODE_ON,
    UI_SET_SEARCH_MODE_OFF,
    UI_SET_SEARCH_QUERY,
    UI_SET_FILTER_SHOW_COMPLETED_TASK
} from '../actions/ui-state/constants';


let initialState;

beforeEach(() => {
    initialState = fromJS({
        activeCategory: null,
        activeTask: null,
        searchMode: false,
        searchQuery: '',
        filterShowCompletedTasks: false
    });

});

describe(`UI state reducer should handle ${UI_SET_ACTIVE_CATEGORY} action`, () => {
    test('should set category id as active', () => {
        const id = 'id1';
        let action = {
            type: UI_SET_ACTIVE_CATEGORY,
            payload: {id}
        };

        let modifiedState = reducer(initialState, action);

        expect(modifiedState.get('activeCategory')).toBe(id);
    });
});

describe(`UI state reducer should handle ${UI_UNSET_ACTIVE_CATEGORY} action`, () => {
    test('should unset active category', () => {
        let action = {
            type: UI_UNSET_ACTIVE_CATEGORY
        };

        initialState = initialState.set('activeCategory', 'id1');

        let modifiedState = reducer(initialState, action);

        expect(modifiedState.get('activeCategory')).toBe(null);
    });
});

describe(`UI state reducer should handle ${UI_SET_ACTIVE_TASK} action`, () => {
    test('should set task id as active', () => {
        const id = 'id1';
        let action = {
            type: UI_SET_ACTIVE_TASK,
            payload: {id}
        };

        let modifiedState = reducer(initialState, action);

        expect(modifiedState.get('activeTask')).toBe(id);
    });
});

describe(`UI state reducer should handle ${UI_UNSET_ACTIVE_TASK} action`, () => {
    test('should unset active task', () => {
        let action = {
            type: UI_UNSET_ACTIVE_TASK
        };

        initialState = initialState.set('activeCategory', 'id1');

        let modifiedState = reducer(initialState, action);

        expect(modifiedState.get('activeTask')).toBe(null);
    });
});


describe(`UI state reducer should handle ${UI_SET_SEARCH_MODE_ON} action`, () => {
    test('should switch on search mode', () => {
        let action = {
            type: UI_SET_SEARCH_MODE_ON
        };

        let modifiedState = reducer(initialState, action);

        expect(modifiedState.get('searchMode')).toBe(true);
    });
});


describe(`UI state reducer should handle ${UI_SET_SEARCH_MODE_OFF} action`, () => {
    test('should switch off search mode', () => {
        let action = {
            type: UI_SET_SEARCH_MODE_OFF
        };

        let modifiedState = reducer(initialState, action);

        expect(modifiedState.get('searchMode')).toBe(false);
    });

    test('should set empty string to search query', () => {
        let action = {
            type: UI_SET_SEARCH_MODE_OFF
        };

        initialState = initialState.set('searchQuery', 'query');

        let modifiedState = reducer(initialState, action);

        expect(modifiedState.get('searchQuery')).toBe('');
    });
});


describe(`UI state reducer should handle ${UI_SET_SEARCH_QUERY} action`, () => {
    test('should update search query', () => {
        const payload = 'query';
        let action = {
            type: UI_SET_SEARCH_QUERY,
            payload
        };

        let modifiedState = reducer(initialState, action);

        expect(modifiedState.get('searchQuery')).toBe(payload);
    });
});


describe(`UI state reducer should handle ${UI_SET_FILTER_SHOW_COMPLETED_TASK} action`, () => {
    test('should set passed value to filterShowCompletedTasks', () => {
        let action = {
            type: UI_SET_FILTER_SHOW_COMPLETED_TASK,
            payload: true
        };
        let modifiedState = reducer(initialState, action);

        expect(modifiedState.get('filterShowCompletedTasks')).toBe(true);
    });
});