import reducer from './user';
import {fromJS, is} from 'immutable';

import {
    LOGIN_SUCCESS
} from "../actions/user/constants";

let initialState;

beforeEach(() => {
    initialState = fromJS({});
});

describe(`User reducer should handle ${LOGIN_SUCCESS} action`, () => {
    test('should store all login data returned from the action', () => {
        const payload = {id:'id', access_token: 'access_token'};
        let action = {
            type: LOGIN_SUCCESS,
            payload
        };

        let modifiedState = reducer(initialState, action);

        expect(is(modifiedState,fromJS(payload))).toBe(true);
    });
});