import {categoryTitleSelector, taskListPageSelector} from './task-list-page';
import {fromJS} from 'immutable';


let dataCategoryCollection, dataActiveCategoryId;

beforeEach(() => {
    dataCategoryCollection = fromJS([{
        id: 'c1',
        title: 'c1 title'
    }, {
        id: 'c2',
        title: 'c2 title'
    }]);

    dataActiveCategoryId = 'c2';
});


describe('categoryTitle selector for Task Page', () => {
    test('Return title of category found by active category ID ', () => {
        dataActiveCategoryId = 'c2';
        let title = categoryTitleSelector.resultFunc(dataCategoryCollection, dataActiveCategoryId);

        expect(title).toBe('c2 title');
    });
});

describe('Task List page selector', () => {
    test('should return data of right scheme', () => {
        const categoryTitle = 'title';
        const activeCategory = 'c1';
        const data = taskListPageSelector.resultFunc(categoryTitle, activeCategory);

        expect(data).toEqual({
            categoryTitle,
            activeCategory
        });
    });
});