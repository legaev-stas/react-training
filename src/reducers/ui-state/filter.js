import createReducer from '../reducer-utilities'

const initialState = {
    showDone: false,
    title: ''
};

const setSearchValue = (state, action) => {
    return Object.assign({}, state, {
        title: action.payload.text
    });
}
const doneToggle = (state, action) => {
    return Object.assign({}, state, {
        showDone: action.payload.checked
    });
}

const filterReducer = createReducer(initialState, {
    'CHANGE_FILTER_SEARCH' : setSearchValue,
    'CHANGE_FILTER_SHOW_DONE' : doneToggle
});

export default filterReducer;