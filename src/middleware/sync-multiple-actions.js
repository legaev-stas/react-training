import { CATEGORY_INITIAL_DELETE } from '../actions/category/constants';

function logger(store) {
    return (next) => (action) => {
        switch (action.type){
            case CATEGORY_INITIAL_DELETE:
                if (confirm('Are you sure you want to delete item?')) {
                    store.dispatch({
                        type: 'DELETE_TASKS_OF_CATEGORY',
                        payload: {
                            deleteCategoryId: action.payload.deleteCategoryId,
                            categoryCollection: store.getState().category.collection
                        }
                    });
                    store.dispatch({
                        type: 'CATEGORY_DELETE',
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
