import React from 'react';
import {List as AntdList} from 'antd-mobile';
import {ListItem} from './item';

export const List = ({collection, checkable, arrow, onEdit, onDelete, onClick, onStatusChange}) => (
    <AntdList>
        {collection.map((model) =>
            <ListItem
                key={model.get('id')}
                model={model}
                checkable={checkable}
                arrow={arrow}
                onEdit={onEdit}
                onDelete={onDelete}
                onClick={onClick}
                onStatusChange={onStatusChange}
            />
        )}
    </AntdList>
);