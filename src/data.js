import {fromJS} from 'immutable';

export default fromJS({
    category: {
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
    },
    task: {
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
    }
});
