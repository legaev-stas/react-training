'use strict';
import Immutable from 'immutable';
import { createSelectorCreator, defaultMemoize } from 'reselect';

export const createSelector = createSelectorCreator(defaultMemoize, Immutable.is);
export const createSimpleSelector = (parent, key) => {
    return createSelector(parent, parent => parent.get(key));
}