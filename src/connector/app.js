import {connect} from 'react-redux';
import {app} from '../selectors/app';

export const appConnector = connect(app, {});
