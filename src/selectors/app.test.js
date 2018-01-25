import {app} from './app';


describe('App selector', () => {
    test('should return data of right scheme', () => {
        const activeCategory = 'c1';
        const activeTask = 't1';
        const data = app.resultFunc(activeCategory, activeTask);

        expect(data).toEqual({
            activeCategory,
            activeTask
        });
    });
});

