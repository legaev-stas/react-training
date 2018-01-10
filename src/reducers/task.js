import {fromJS} from 'immutable';

import {
    TASK_DELETE_WITH_CATEGORY,
    TASK_EDIT,
    TASK_DELETE,
    TASK_CREATE,
    TASK_STATUS_CHANGE
} from '../actions/task/constants';

const initialState = fromJS({
    active: null,
    ui: {
        filter: {
            showDone: false,
            title: ''
        }
    },
    collection: [
        {
            category: '6de2c350-6aee-4c14-8f97-428e5bc69692',
            id: 'd7c95788-7a69-45f8-b223-a23bee98ce7x',
            title: 'Title',
            description: 'Description',
            completed: false
        },
        {
            category: '6de2c350-6aee-4c14-8f97-428e5bc69692',
            id: 'd7c95788-7a69-45f8-b223-a23bee98ce7y',
            title: 'Title 2',
            description: 'Description 2',
            completed: true
        },
        {
            category: 'd7c95788-7a69-45f8-b223-a23bee98ce7d',
            id: 'd7c95788-7a69-45f8-b223-a23bee98ce7z',
            title: 'Title 3',
            description: 'Description 3',
            completed: false
        }
    ]
});

export default (state = initialState, action) => {
    const {type, payload} = action;
    let newCollection;

    switch (type) {
        case TASK_DELETE_WITH_CATEGORY:
            newCollection = state.get('collection').filterNot(value => payload === value.get('category'));

            return state.set('collection', newCollection);


        case TASK_DELETE:
            newCollection = state.get('collection').filterNot(value => payload === value.get('id'));

            return state.set('collection', newCollection);


        case TASK_EDIT:
            return state.set('active', payload);


        case TASK_CREATE:
            return state.set('collection', state.get('collection').push(fromJS(payload)));


        case TASK_STATUS_CHANGE:
            const indexToUpdate = state.get('collection').findIndex(task => payload.id === task.get('id'))
            newCollection = state.get('collection').update(indexToUpdate, task => task.set('completed', payload.completed));

            return state.set('collection', newCollection);


        default:
            return state;
    }
};
