import {fromJS} from 'immutable';

export default fromJS({
    uiState: {
        filter: {
            showDone: false,
            title: ''
        },
        addCategoryTitle: '',
        newTaskTitle: '',
        taskEdit: {
            category: '',
            title: '',
            done: false,
            description: ''
        }
    },
    category: {
        collection: [
            {
                id: '6de2c350-6aee-4c14-8f97-428e5bc69692',
                name: 'Category 1',
                parent: null
            },
            {
                id: '952a2bd9-2b87-4da5-ad56-1023fbd1ee39',
                name: 'SubCategory 1.1',
                parent: '6de2c350-6aee-4c14-8f97-428e5bc69692'
            },
            {
                id: 'a0ac2b14-6efa-4882-a8e1-ce82ab83e2fc',
                name: 'SubSubCategory 1.1.1',
                parent: '952a2bd9-2b87-4da5-ad56-1023fbd1ee39'
            },
            {
                id: 'f4bc0e1b-5cf5-4cce-8e62-bba7ef040b92',
                name: 'SubSubCategory 1.1.2',
                parent: '952a2bd9-2b87-4da5-ad56-1023fbd1ee39'
            },
            {
                id: '003e7fe2-cc79-45e2-9b97-9c75cc8debd8',
                name: 'SubCategory 1.2',
                parent: '6de2c350-6aee-4c14-8f97-428e5bc69692'
            },
            {
                id: '0e7b0cb3-87f9-48e2-9e69-fdfe9d159c47',
                name: 'SubSubCategory 1.2.1',
                parent: '003e7fe2-cc79-45e2-9b97-9c75cc8debd8'
            },
            {
                id: 'd7c95788-7a69-45f8-b223-a23bee98ce7d',
                name: 'Category 2',
                parent: null
            }
        ]
    },
    task: {
        byId: {
            'd7c95788-7a69-45f8-b223-a23bee98ce7x': {
                category: '6de2c350-6aee-4c14-8f97-428e5bc69692',
                id: 'd7c95788-7a69-45f8-b223-a23bee98ce7x',
                title: 'Title',
                description: 'Description',
                done: false
            },
            'd7c95788-7a69-45f8-b223-a23bee98ce7y': {
                category: '6de2c350-6aee-4c14-8f97-428e5bc69692',
                id: 'd7c95788-7a69-45f8-b223-a23bee98ce7y',
                title: 'Title 2',
                description: 'Description 2',
                done: true
            },
            'd7c95788-7a69-45f8-b223-a23bee98ce7z': {
                category: 'd7c95788-7a69-45f8-b223-a23bee98ce7d',
                id: 'd7c95788-7a69-45f8-b223-a23bee98ce7z',
                title: 'Title 3',
                description: 'Description 3',
                done: false
            }
        },
        order: [
            'd7c95788-7a69-45f8-b223-a23bee98ce7x',
            'd7c95788-7a69-45f8-b223-a23bee98ce7y',
            'd7c95788-7a69-45f8-b223-a23bee98ce7z'
        ]
    }
});
