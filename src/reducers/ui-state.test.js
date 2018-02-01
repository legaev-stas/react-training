import reducer from './ui-state';
import {fromJS, is} from 'immutable';

import {
    UI_SET_ACTIVE_CATEGORY,
    UI_UNSET_ACTIVE_CATEGORY,
    UI_SET_EDITABLE_TASK,
    UI_UNSET_EDITABLE_TASK,
    UI_SET_SEARCH_MODE_ON,
    UI_SET_SEARCH_MODE_OFF,
    UI_SET_SEARCH_QUERY,
    UI_CHANGE_FILTER_SHOW_COMPLETED_TASK
} from '../actions/ui-state/constants';
import {
    EDITABLE_TASK_CATEGORY_CHANGE,
    EDITABLE_TASK_DESCRIPTION_CHANGE,
    EDITABLE_TASK_STATUS_CHANGE,
    EDITABLE_TASK_TITLE_CHANGE
} from "../actions/task/constants";

let initialState;

beforeEach(() => {
    initialState = fromJS({
        activeCategory: null,
        editableTask: null,
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

describe(`UI state reducer should handle ${UI_SET_EDITABLE_TASK} action`, () => {
    test('should set task model as active', () => {
        const payload = {
            "id": "e5c452d1-c161-49b3-beee-abb20e1f56b8",
            "category": "78e9960f-c23a-4208-a747-44dfa632e44b",
            "title": "1",
            "description": "",
            "completed": false
        };
        let action = {
            type: UI_SET_EDITABLE_TASK,
            payload
        };

        let modifiedState = reducer(initialState, action);

        expect(is(modifiedState.get('editableTask'), fromJS(payload))).toBe(true);
    });
});

describe(`UI state reducer should handle ${UI_UNSET_EDITABLE_TASK} action`, () => {
    test('should unset active task', () => {
        let action = {
            type: UI_UNSET_EDITABLE_TASK
        };

        initialState = initialState.set('activeCategory', 'id1');

        let modifiedState = reducer(initialState, action);

        expect(modifiedState.get('editableTask')).toBe(null);
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


describe(`UI state reducer should handle ${UI_CHANGE_FILTER_SHOW_COMPLETED_TASK} action`, () => {
    test('should set passed value to filterShowCompletedTasks', () => {
        let action = {
            type: UI_CHANGE_FILTER_SHOW_COMPLETED_TASK,
            payload: true
        };
        let modifiedState = reducer(initialState, action);

        expect(modifiedState.get('filterShowCompletedTasks')).toBe(true);
    });
});

describe(`Task reducer should handle ${EDITABLE_TASK_CATEGORY_CHANGE} action`, () => {
    test('task can change category it associated to', () => {
        let action = {
            type: EDITABLE_TASK_CATEGORY_CHANGE,
            payload: ['c2']
        };
        initialState = initialState.set('editableTask', fromJS({category: 'c1'}));

        let modifiedState = reducer(initialState, action);

        expect(modifiedState.getIn(['editableTask', 'category'])).toBe('c2');
    });
});

describe(`Category reducer should handle ${EDITABLE_TASK_DESCRIPTION_CHANGE} action`, () => {
    test('Description of task found by id should be updated', () => {
        const payload = 'New description';
        let action = {
            type: EDITABLE_TASK_DESCRIPTION_CHANGE,
            payload
        };
        initialState = initialState.set('editableTask', fromJS({description: 'description'}));

        let modifiedState = reducer(initialState, action);

        expect(modifiedState.getIn(['editableTask', 'description'])).toBe(payload);
    });
});


describe(`Category reducer should handle ${EDITABLE_TASK_STATUS_CHANGE} action`, () => {
    test('Completed status of task found by id should be updated', () => {
        const payload = true;
        let action = {
            type: EDITABLE_TASK_STATUS_CHANGE,
            payload
        };
        initialState = initialState.set('editableTask', fromJS({completed: false}));

        let modifiedState = reducer(initialState, action);

        expect(modifiedState.getIn(['editableTask', 'completed'])).toBe(payload);
    });
});


describe(`Category reducer should handle ${EDITABLE_TASK_TITLE_CHANGE} action`, () => {
    test('Title of task found by id should be updated', () => {
        const payload = 'New title';
        let action = {
            type: EDITABLE_TASK_TITLE_CHANGE,
            payload
        };
        initialState = initialState.set('editableTask', fromJS({title: 'title'}));

        let modifiedState = reducer(initialState, action);

        expect(modifiedState.getIn(['editableTask', 'title'])).toBe(payload);
    });
});