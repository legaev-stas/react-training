import React from 'react';
import {List, InputItem, TextareaItem, Picker} from 'antd-mobile';


export class Form extends React.Component {
    constructor(props) {
        super(props);

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onCategoryChange = this.onCategoryChange.bind(this);
    }

    onTitleChange(title) {
        this.props.onTitleChange({
            id: this.props.model.get('id'),
            title
        });
    }

    onDescriptionChange(description) {
        this.props.onDescriptionChange({
            id: this.props.model.get('id'),
            description
        });
    }

    onCategoryChange(category) {
        this.props.onCategoryChange({
            id: this.props.model.get('id'),
            category: category[0]
        });
    }

    render() {
        return (
            <div>
                <List>
                    <InputItem
                        type="text"
                        placeholder="Title"
                        value={this.props.model.get('title')}
                        onChange={this.onTitleChange}
                    />
                    <TextareaItem
                        autoHeight
                        placeholder="Description"
                        value={this.props.model.get('description')}
                        onChange={this.onDescriptionChange}
                    />

                    <Picker
                        cols={1}
                        title="Move Task to Category"
                        okText="Move"
                        dismissText="Cancel"
                        data={this.props.categoryPickerList.toJS()}
                        value={[this.props.model.get('category')]}
                        extra={this.props.categoryTitle}
                        onChange={this.onCategoryChange}
                    >
                        <List.Item arrow="horizontal">Category</List.Item>
                    </Picker>
                </List>
            </div>
        );
    }
}

