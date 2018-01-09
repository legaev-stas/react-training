import React from 'react';
import {List as AntdList} from 'antd-mobile';
import {ListItem} from './item';

export const List = ({collection, onEdit, onDelete, onClick}) => (
    <AntdList>
        {collection.map((category) =>
            <ListItem
                key={category.id}
                id={category.id}
                title={category.title}
                badge={category.badge}
                onEdit={onEdit}
                onDelete={onDelete}
                onClick={onClick}
            />
        )}
    </AntdList>
);