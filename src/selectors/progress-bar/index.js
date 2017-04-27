import {createSimpleSelector, createSelector} from '../../helpers/selector';
import {getState} from '../../helpers/store'

const state = (state = getState()) => state;

const task = createSimpleSelector(state, 'task');
const byId = createSimpleSelector(task, 'byId');
const order = createSimpleSelector(task, 'order');

export const completionProgress = createSelector([byId, order], (byId, order) => {
    byId = byId.toJS();
    order = order.toJS();
    const taskNumber = order.length;
    const completeTaskNumber = order.map(id => byId[id]).filter(task => task.done).length;

    return {value: completeTaskNumber / taskNumber}
});