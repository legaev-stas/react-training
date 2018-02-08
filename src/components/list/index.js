import React from 'react';
import AntdList from 'antd-mobile/lib/list';
import {ListItem} from './item';

export const List = ({collection, checkable, arrow, onEdit, onDelete, onClick, onStatusChange}) => (
    <div className="list-component">
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
    </div>
);