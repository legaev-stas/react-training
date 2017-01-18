import { connect } from 'react-redux';
import Header from '../../components/header';
import {changeSearch, resetSearch, doneToggle} from '../../actions/header';

const mapStateToProps = (state) => {
    return state.filter;
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeSearch: (text) => {
            dispatch(changeSearch(text));
        },
        resetSearch: () => {
            dispatch(resetSearch());
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
