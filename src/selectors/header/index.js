import {createSelector} from '../../helpers/selector';
import {getState} from '../../helpers/store';

const state = (state = getState()) => state;

export const filter = createSelector(state, state => state.getIn(['task','ui','filter']).toJS());