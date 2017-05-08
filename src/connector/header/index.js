import {connect} from 'react-redux';
import {filter} from '../../selectors/header';
import {setSearchValue, doneToggle, resetSearchValue} from '../../actions/task';

export const headerConnector = connect(filter, {
    setSearchValue: setSearchValue,
    doneToggle: doneToggle,
    resetSearchValue: resetSearchValue
});
