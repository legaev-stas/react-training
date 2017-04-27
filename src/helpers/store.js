var storeReference = null;

export const setStore = store => {
    if(storeReference){
        console.error('State could be stored only once')
        return;
    }
    storeReference = store;
}

export const getStore = () => storeReference;
export const getState = () => storeReference.getState();
export const dispatch = action => storeReference.dispatch(action);