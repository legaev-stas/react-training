import React from 'react';
import {List as AntdList} from 'antd-mobile';
import {ListItem} from './item';

export const List = ({collection, checkable, onEdit, onDelete, onClick, onStatusChange}) => (
    <AntdList>
        {collection.map((category) =>
            <ListItem
                key={category.id}
                id={category.id}
                title={category.title}
                badge={category.badge}
                checkable={checkable}
                checked={category.checked}
                onEdit={onEdit}
                onDelete={onDelete}
                onClick={onClick}
                onStatusChange={onStatusChange}
            />
        )}
    </AntdList>
);