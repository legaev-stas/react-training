import createReducer from './reducer-utilities'

const initialState = {
    showDone: false,
    title: ''
};

const changeSearch = (state, action) => {
    return Object.assign({}, state, {
        title: action.payload.text
    });
}
const resetSearch = (state, action) => {
    return Object.assign({}, state, {
        title: ''
    });
}
const doneToggle = (state, action) => {
    return Object.assign({}, state, {
        showDone: action.payload.checked
    });
}

const filterReducer = createReducer(initialState, {
    'CHANGE_FILTER_SEARCH' : changeSearch,
    'RESET_FILTER_SEARCH' : resetSearch,
    'CHANGE_FILTER_SHOW_DONE' : doneToggle
});

export default filterReducer;