import React from 'react';
import {SwipeAction, List, Badge, Checkbox, Flex} from 'antd-mobile';
import './styles.css';


export class ListItem extends React.Component {
    constructor(props) {
        super(props);

        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onStatusChange = this.onStatusChange.bind(this);
    }

    onDelete() {
        this.props.onDelete(this.props);
    }

    onClick() {
        this.props.onClick && this.props.onClick(this.props);
    }

    onEdit() {
        this.props.onEdit(this.props);
    }

    onStatusChange(e){
        e.preventDefault();
        this.props.onStatusChange({
            id: this.props.id,
            checked: !this.props.checked
        });
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
                    extra={<Badge text={this.props.badge} overflowCount={10}/>}
                    onClick={this.onClick}
                >
                    <Flex>
                        {this.props.checkable &&
                        <Checkbox checked={this.props.checked} onClick={this.onStatusChange}/>
                        }
                        <Flex.Item>{this.props.title}</Flex.Item>
                    </Flex>
                </List.Item>
            </SwipeAction>
        );
    }
}
