import {app} from './app';
import {fromJS} from 'immutable';


describe('App selector', () => {
    test('should return data of right scheme', () => {
        const activeCategory = 'c1';
        const editableTask = fromJS({id: 't1'});
        const data = app.resultFunc(activeCategory, editableTask);

        expect(data).toEqual({
            activeCategory,
            editableTask
        });
    });
});

