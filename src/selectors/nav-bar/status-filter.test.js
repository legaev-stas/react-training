import {statusFilterSelector} from './status-filter';


describe('Status Filter selector', () => {
    test('should return data of right scheme', () => {
        const filterShowCompletedTasks = true;
        const data = statusFilterSelector.resultFunc(filterShowCompletedTasks);

        expect(data).toEqual({checked: filterShowCompletedTasks});
    });
});

