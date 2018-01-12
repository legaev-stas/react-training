import {connect} from 'react-redux';
import {statusFilterSelector} from '../../selectors/nav-bar/status-filter';
import {
    onFilterChange
} from '../../actions/task/index';


export const statusFilterConnector = connect(statusFilterSelector, {
    onFilterChange
});
