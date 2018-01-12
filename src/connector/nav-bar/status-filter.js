import {connect} from 'react-redux';
import {statusFilterSelector} from '../../selectors/status-filter';
import {
    onFilterChange
} from '../../actions/task/index';


export const statusFilterConnector = connect(statusFilterSelector, {
    onFilterChange
});
