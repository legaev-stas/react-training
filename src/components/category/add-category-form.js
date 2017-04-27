import React from 'react';
import Input from '../forms/input/index';
import Button from '../forms/button/index';

export const AddCategoryForm = ({addCategoryTitle, addCategory, setNewCategoryTitleValue}) => (
    <div>
        <Input
            type="text"
            placeholder="Enter category title"
            value={addCategoryTitle}
            onChange={setNewCategoryTitleValue}
        />

        <Button onClick={() => addCategory(addCategoryTitle)}>Add</Button>
    </div>
);
