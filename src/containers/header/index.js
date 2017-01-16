import { connect } from 'react-redux';
import Header from '../../components/header';
import {changeFilterSearch, resetFilterSearch, changeFilterShowDone} from '../../actions/header';

const mapStateToProps = (state) => {
    return {
        searchText: state.state.filterSearch,
        showDone: state.state.filterShowDone
    }
}

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
