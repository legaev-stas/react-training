import React from 'react';
import {List, InputItem, TextareaItem, Picker, Switch} from 'antd-mobile';


export const Form = ({
                         model,
                         categoryTitle,
                         categoryPickerList,
                         onTitleChange,
                         onDescriptionChange,
                         onStatusChange,
                         onCategoryChange
                     }) => (
    <div className="task-page">
        <List renderHeader=" ">
            <InputItem
                type="text"
                placeholder="Title"
                value={model.get('title')}
                onChange={onTitleChange}
            />
            <TextareaItem
                autoHeight
                placeholder="Description"
                value={model.get('description')}
                onChange={onDescriptionChange}
            />
        </List>
        <List renderHeader=" ">
            <List.Item
                extra={<Switch
                    checked={model.get('completed')}
                    onChange={onStatusChange}
                />}
            >Task is completed</List.Item>

            <Picker
                cols={1}
                title="Move Task to Category"
                okText="Move"
                dismissText="Cancel"
                data={categoryPickerList.toJS()}
                value={[model.get('category')]}
                extra={categoryTitle}
                onChange={onCategoryChange}
            >
                <List.Item arrow="horizontal">Category</List.Item>
            </Picker>
        </List>
    </div>
);

