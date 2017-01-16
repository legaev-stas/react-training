import { connect } from 'react-redux';
import Header from '../../components/header';
import {changeFilterSearch, resetFilterSearch, changeFilterShowDone} from '../../actions/header';

const mapStateToProps = (state) => {
    return state.filter;
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeFilterSearch: (text) => {
            dispatch(changeFilterSearch(text));
        },
        resetFilterSearch: () => {
            dispatch(resetFilterSearch());
        },
        changeFilterShowDone: (checked) => {
            dispatch(changeFilterShowDone(checked));
        }
    }
}

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default HeaderContainer;
