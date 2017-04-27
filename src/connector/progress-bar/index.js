import {connect} from 'react-redux';
import {completionProgress} from '../../selectors/progress-bar';

export const progressBarConnector = connect(completionProgress);
