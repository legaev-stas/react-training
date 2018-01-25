import {taskListSelector} from './task-list';
import {fromJS} from 'immutable';


let dataTaskCollection, dataActiveCategoryId, dataFilterShowCompleted, dataSearchMode, dataSearch;

beforeEach(() => {
    dataTaskCollection = fromJS([{
        id: 't1',
        category: 'c1',
        title: "t1 title",
        description: "",
        completed: true
    }, {
        id: 't2',
        category: 'c1',
        title: "t2 title",
        description: "",
        completed: false
    }, {
        id: 't3',
        category: 'c2',
        title: "Some Name",
        description: "",
        completed: false
    }]);
    dataActiveCategoryId = null;
    dataFilterShowCompleted = true;
    dataSearchMode = false;
    dataSearch = '';
});


describe('Tasks selector for Search Mode case', () => {
    beforeEach(() => {
        dataSearchMode = true;
    });

    test('Collection should be empty in case search query is empty', () => {
        let {collection} = taskListSelector.resultFunc(dataTaskCollection, dataActiveCategoryId, dataFilterShowCompleted, dataSearchMode, dataSearch);

        expect(collection.size).toBe(0);
    });

    test('Collection should contain only tasks those title matches search query', () => {
        dataSearch = 'title';
        let {collection} = taskListSelector.resultFunc(dataTaskCollection, dataActiveCategoryId, dataFilterShowCompleted, dataSearchMode, dataSearch);

        expect(collection.size).toBe(2);
    });

    test('search should not be case sensitive', () => {
        dataSearch = 'TITLE';
        let {collection} = taskListSelector.resultFunc(dataTaskCollection, dataActiveCategoryId, dataFilterShowCompleted, dataSearchMode, dataSearch);

        expect(collection.size).toBe(2);
    });

    test('Collection of found tasks should not contain any task that is completed in case filter filterShowCompleted  set to false', () => {
        dataSearch = 'title';
        dataFilterShowCompleted = false;
        let {collection} = taskListSelector.resultFunc(dataTaskCollection, dataActiveCategoryId, dataFilterShowCompleted, dataSearchMode, dataSearch);

        expect(collection.size).toBe(1);
    });
});

describe('Tasks selector for Active Category case', () => {
    beforeEach(() => {
        dataActiveCategoryId = 'c1';
    });

    test('Collection should be empty in case there is no tasks associated with active category', () => {
        dataActiveCategoryId = 'c3';
        let {collection} = taskListSelector.resultFunc(dataTaskCollection, dataActiveCategoryId, dataFilterShowCompleted, dataSearchMode, dataSearch);

        expect(collection.size).toBe(0);
    });

    test('Collection should contain only tasks those title matches search query', () => {
        let {collection} = taskListSelector.resultFunc(dataTaskCollection, dataActiveCategoryId, dataFilterShowCompleted, dataSearchMode, dataSearch);

        expect(collection.size).toBe(2);
    });

    test('Collection of found tasks should not contain any task that is completed in case filter filterShowCompleted  set to false', () => {
        dataFilterShowCompleted = false;
        let {collection} = taskListSelector.resultFunc(dataTaskCollection, dataActiveCategoryId, dataFilterShowCompleted, dataSearchMode, dataSearch);

        expect(collection.size).toBe(1);
    });
});
