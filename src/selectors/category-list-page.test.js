import {categoryListPageSelector} from './category-list-page';
import {fromJS, is} from 'immutable';


const tasksCollection = [{
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
}];

let dataCategoryCollection, dataTaskCollection, dataSearchMode, dataSearch;

beforeEach(() => {
    dataCategoryCollection = fromJS([{
        id: 'c1',
        title: 'c1 title'
    }, {
        id: 'c2',
        title: 'c2 title'
    }]);
    dataTaskCollection = fromJS(tasksCollection);
    dataSearchMode = false;
    dataSearch = '';
});


describe('Category selector', () => {
    test('Every Category in the collection should have "tasks" field as an Immutable.List', () => {
        let {collection} = categoryListPageSelector.resultFunc(dataCategoryCollection, dataTaskCollection, dataSearchMode, dataSearch);
        expect(collection.every(category => category.has('tasks'))).toBe(true);
    });


    test('Category that has related tasks, should have reference to all of them as {tasks: Immutable.List<Task>, ...Category}}', () => {
        let {collection} = categoryListPageSelector.resultFunc(dataCategoryCollection, dataTaskCollection, dataSearchMode, dataSearch);
        let c1 = collection.find(category => category.get('id') === 'c1');
        expect(is(c1.get('tasks'), fromJS(tasksCollection))).toBe(true);
    });


    test('Category that has no related tasks, should have empty Immutable.List as value of "tasks" key', () => {
        let {collection} = categoryListPageSelector.resultFunc(dataCategoryCollection, dataTaskCollection, dataSearchMode, dataSearch);
        let c2 = collection.find(category => category.get('id') === 'c2');
        expect(c2.get('tasks').size).toBe(0);
    });


    test('Every Category in the collection should have "badge" field', () => {
        let {collection} = categoryListPageSelector.resultFunc(dataCategoryCollection, dataTaskCollection, dataSearchMode, dataSearch);
        expect(collection.every(category => category.has('badge'))).toBe(true);
    });


    test('Category that has related tasks, should have badge field == amount of uncompleted related tasks', () => {
        let {collection} = categoryListPageSelector.resultFunc(dataCategoryCollection, dataTaskCollection, dataSearchMode, dataSearch);
        let c1 = collection.find(category => category.get('id') === 'c1');
        expect(c1.get('badge')).toBe(1);
    });


    test('Category that has no related tasks, should have badge field == 0', () => {
        let {collection} = categoryListPageSelector.resultFunc(dataCategoryCollection, dataTaskCollection, dataSearchMode, dataSearch);
        let c2 = collection.find(category => category.get('id') === 'c2');
        expect(c2.get('badge')).toBe(0);
    });
});
