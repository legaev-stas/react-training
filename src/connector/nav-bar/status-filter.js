import {connect} from 'react-redux';
import {statusFilterSelector} from '../../selectors/nav-bar/status-filter';
import {
    onChangeFilterShowCompleted
} from '../../actions/ui-state';


export const statusFilterConnector = connect(statusFilterSelector, {
    onChange: onChangeFilterShowCompleted
});
