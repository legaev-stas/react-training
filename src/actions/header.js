export const changeSearch = (text) => {
    return {
        type: 'CHANGE_FILTER_SEARCH',
        payload: {
            text
        }
    }
};
export const resetSearch = () => {
    return {
        type: 'RESET_FILTER_SEARCH'
    }
};
export const doneToggle = (checked) => {
    return {
        type: 'CHANGE_FILTER_SHOW_DONE',
        payload: {
            checked
        }
    }
};
