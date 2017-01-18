import React from 'react';
import Input from '../forms/input';
import Button from '../forms/button';
import Category from '../category';

const CategoryBar = ({params, addCategoryTitle, collection, addCategory, addNestedCategory, editHandler, deleteHandler, changeNewCategoryTitle}) => (
    <div>
        <Input
            type="text"
            placeholder="Enter category title"
            value={addCategoryTitle}
            onChange={changeNewCategoryTitle}
        />

        <Button onClick={() => addCategory(addCategoryTitle)}>Add</Button>

        {collection.filter(category => category.parent === null).map((props) =>
            <Category
                key={props.id}
                {...props}
                collection={collection}
                activeCategoryId={params.activeCategoryId}
                editHandler={editHandler}
                deleteHandler={deleteHandler}
                addNestedCategory={addNestedCategory}
            />
        )}
    </div>
);

export default CategoryBar;