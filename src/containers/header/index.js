import { connect } from 'react-redux';
import Header from '../../components/header';
import {setSearchValue, doneToggle} from '../../actions/task-filter';

const mapStateToProps = (state) => {
    return state.uiState.filter;
};

const mapDispatchToProps = (dispatch) => {
    return {
        setSearchValue: (text) => {
            dispatch(setSearchValue(text));
        },
        doneToggle: (checked) => {
            dispatch(doneToggle(checked));
        }
    }
}

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default HeaderContainer;
