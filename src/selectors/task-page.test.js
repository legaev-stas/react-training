import {categoryPickerListSelector, taskSelector, categoryTitleSelector, taskPageSelector} from './task-page';
import {fromJS, is} from 'immutable';


let dataActiveTask, dataTaskCollection, dataCategoryCollection, dataTask;

beforeEach(() => {
    dataCategoryCollection = fromJS([{
        id: 'c1',
        title: 'c1 title'
    }, {
        id: 'c2',
        title: 'c2 title'
    }]);
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
    dataTask = null;
    dataActiveTask = null;
});


describe('categoryPickerListSelector selector for Task Page', () => {
    test('All categories should be returned as a List of following format [{value, label}]', () => {
        let list = categoryPickerListSelector.resultFunc(dataCategoryCollection);

        expect(is(list, fromJS([{
            value: 'c1',
            label: 'c1 title'
        }, {
            value: 'c2',
            label: 'c2 title'
        }]))).toBe(true);
    });
});


describe('categoryTitleSelector selector for Task Page', () => {
    test('Title of matched category should be returned', () => {
        dataTask = fromJS({
            id: 't2',
            category: 'c1',
            title: "t2 title",
            description: "",
            completed: false
        });

        let title = categoryTitleSelector.resultFunc(dataCategoryCollection, dataTask);

        expect(title).toBe('c1 title');
    });
});


describe('Task page selector', () => {
    test('should return data of right scheme', () => {
        const categoryPickerList = [];
        const task = {};
        const categoryTitle = 'c1';

        const data = taskPageSelector.resultFunc(categoryPickerList, task, categoryTitle);

        expect(data).toEqual({
            categoryPickerList,
            task,
            categoryTitle
        });
    });
});