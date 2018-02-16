import {fromJS} from 'immutable';

import {LOGIN_SUCCESS} from '../actions/user/constants';


const initialState = fromJS({});

export default (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case LOGIN_SUCCESS:
            console.log(payload)
            return fromJS(payload);


        default:
            return state;
    }
};
