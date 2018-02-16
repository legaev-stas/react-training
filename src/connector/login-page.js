import {connect} from 'react-redux';

import {onlogin} from '../actions/user';

export const loginPageConnector = connect(null, {
    onlogin
});
