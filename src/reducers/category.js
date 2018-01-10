import {fromJS} from 'immutable';

import {
    CATEGORY_ADD,
    CATEGORY_EDIT,
    CATEGORY_DELETE,
    CATEGORY_SET_ACTIVE,
    CATEGORY_RESET_ACTIVE
} from '../actions/category/constants';

const initialState = fromJS({
    active: null,
    collection: [
        {
            id: '6de2c350-6aee-4c14-8f97-428e5bc69692',
            title: 'Category 1'
        },
        {
            id: '952a2bd9-2b87-4da5-ad56-1023fbd1ee39',
            title: 'SubCategory 1.1'
        },
        {
            id: 'a0ac2b14-6efa-4882-a8e1-ce82ab83e2fc',
            title: 'SubSubCategory 1.1.1'
        },
        {
            id: 'f4bc0e1b-5cf5-4cce-8e62-bba7ef040b92',
            title: 'SubSubCategory 1.1.2'
        },
        {
            id: '003e7fe2-cc79-45e2-9b97-9c75cc8debd8',
            title: 'SubCategory 1.2'
        },
        {
            id: '0e7b0cb3-87f9-48e2-9e69-fdfe9d159c47',
            title: 'SubSubCategory 1.2.1'
        },
        {
            id: 'd7c95788-7a69-45f8-b223-a23bee98ce7d',
            title: 'Category 2'
        }
    ]
});

export default (state = initialState, action) => {
    const {type, payload} = action;
    var collection;

    switch (type) {
        case CATEGORY_ADD:
            if (payload.title) {
                collection = state.get('collection');

                collection = collection.concat(fromJS([payload]));

                return state.set('collection', collection);
            } else {
                return state;
            }


        case CATEGORY_EDIT:
            collection = state.get('collection');

            collection = collection.map(item => {
                if (item.get('id') === payload.id) {
                    return item.set('title', payload.title);
                }
                return item;
            });

            return state.set('collection', collection);


        case CATEGORY_DELETE:
            let newCollection = state.get('collection').filterNot(value => payload === value.get('id'));

            return state.set('collection', newCollection);


        case CATEGORY_SET_ACTIVE:
            return state.set('active', payload);


        case CATEGORY_RESET_ACTIVE:
            return state.set('active', null);


        default:
            return state;
    }
};
