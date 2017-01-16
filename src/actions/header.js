export const changeFilterSearch = (text) => {
    return {
        type: 'CHANGE_FILTER_SEARCH',
        payload: {
            text
        }
    }
};
export const resetFilterSearch = () => {
    return {
        type: 'RESET_FILTER_SEARCH'
    }
};
export const changeFilterShowDone = (checked) => {
    return {
        type: 'CHANGE_FILTER_SHOW_DONE',
        payload: {
            checked
        }
    }
};
