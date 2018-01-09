import React from 'react';
import {SwipeAction, List, Badge} from 'antd-mobile';
import './styles.css';


export class ListItem extends React.Component {
    constructor(props) {
        super(props);

        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onDelete() {
        this.props.onDelete(this.props);
    }

    onClick() {
        this.props.onClick(this.props);
    }

    onEdit() {
        this.props.onEdit(this.props);
    }

    render() {
        return (
            <SwipeAction
                style={{backgroundColor: 'gray'}}
                autoClose
                right={[
                    {
                        text: 'Delete',
                        onPress: this.onDelete,
                        style: {backgroundColor: 'red', color: 'white'},
                    }
                ]}
                left={[
                    {
                        text: 'Edit',
                        onPress: this.onEdit,
                        style: {backgroundColor: 'blue', color: 'white'},
                    }
                ]}
            >
                <List.Item
                    onClick={this.onClick}
                    extra={<Badge text={this.props.badge} overflowCount={10}/>}
                >{this.props.title}</List.Item>
            </SwipeAction>
        );
    }
}
