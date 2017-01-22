export const setSearchValue = (text) => {
    return {
        type: 'CHANGE_FILTER_SEARCH',
        payload: {
            text
        }
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
