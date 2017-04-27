import {createSimpleSelector, createSelector} from '../../helpers/selector';
import {getState} from '../../helpers/store';

const state = (state = getState()) => state;

const uiState = createSimpleSelector(state, 'uiState');

export const filter = createSelector(uiState, uiState => uiState.get('filter').toJS());