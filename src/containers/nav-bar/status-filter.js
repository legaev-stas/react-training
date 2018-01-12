import {StatusFilter} from '../../components/nav-bar/status-filter';
import {statusFilterConnector} from '../../connector/nav-bar/status-filter';
export const StatusFilterContainer = statusFilterConnector(StatusFilter);