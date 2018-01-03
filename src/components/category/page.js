import React from 'react';
import {List} from 'antd-mobile';
import {CategoryItem} from './item';
import {AppNavBar} from './app-nav-bar';
import './styles.css';

export const CategoryPage = ({collection, editHandler, deleteHandler, openCategory, addCategory}) => (
    <div>
        <AppNavBar addCategory={addCategory}/>
        <List>
            {collection.map((category) =>
                <CategoryItem
                    key={category.id}
                    id={category.id}
                    name={category.name}
                    uncompletedTasksNumber={category.uncompletedTasksNumber}
                    editHandler={editHandler}
                    deleteHandler={deleteHandler}
                    openCategory={openCategory}
                />
            )}
        </List>
    </div>
);
