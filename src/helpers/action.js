export const createAction = type => payload => ({type, payload});

export const createParallelActions = (actions) => {
    return (payload) => {
        return dispatch => {
            actions.forEach((action) => {
                dispatch({type: action, payload});
            })
        }
    }
}