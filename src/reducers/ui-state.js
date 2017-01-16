const uiStateReducer = (state = [], action) => {
    switch (action.type) {
        case 'CHANGE_FILTER_SEARCH':
            return Object.assign({}, state, {
                filterSearch: action.payload.text
            });
        case 'RESET_FILTER_SEARCH':
            return Object.assign({}, state, {
                filterSearch: ''
            });
        case 'CHANGE_FILTER_SHOW_DONE':
            return Object.assign({}, state, {
                filterShowDone: action.payload.checked
            });
        default:
            return state
    }
}

export default uiStateReducer;