import React from 'react';
import {CategoryItem} from './category-item';

export const CategoryList = ({collection,  addNestedCategory, editHandler, deleteHandler}) => (
    <div>
        {collection.filter(category => category.parent === null).map((props) =>
            <CategoryItem
                key={props.id}
                {...props}
                collection={collection}
                editHandler={editHandler}
                deleteHandler={deleteHandler}
                addNestedCategory={addNestedCategory}
            />
        )}
    </div>
);
