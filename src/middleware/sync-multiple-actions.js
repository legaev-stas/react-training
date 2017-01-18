function logger(store) {
    return (next) => (action) => {
        switch (action.type){
            case 'INITIAL_DELETE_CATEGORY':
                if (confirm('Are you sure you want to delete item?')) {
                    store.dispatch({
                        type: 'DELETE_TASKS_OF_CATEGORY',
                        payload: {
                            deleteCategoryId: action.payload.deleteCategoryId,
                            categoryCollection: store.getState().category.collection
                        }
                    });
                    store.dispatch({
                        type: 'DELETE_CATEGORY',
                        payload: action.payload
                    });
                }
                break;
            default:
                return next(action);
        }
    }
}

export default logger;
