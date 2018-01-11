import React from 'react';
import {SwipeAction, List, Badge, Checkbox, Flex} from 'antd-mobile';
import './styles.css';


export class ListItem extends React.PureComponent {
    constructor(props) {
        super(props);

        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onStatusChange = this.onStatusChange.bind(this);
    }

    onDelete() {
        this.props.onDelete(this.props.model.toJS());
    }

    onClick() {
        this.props.onClick && this.props.onClick(this.props.model.toJS());
    }

    onEdit() {
        this.props.onEdit(this.props.model.toJS());
    }

    onStatusChange(){
        this.props.onStatusChange({
            id: this.props.model.get('id'),
            completed: !this.props.model.get('completed')
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
                    extra={<Badge text={this.props.model.get('badge')} overflowCount={10}/>}
                    onClick={this.onClick}
                >
                    <Flex>
                        {this.props.checkable &&
                        <Checkbox checked={this.props.model.get('completed')} onClick={this.onStatusChange}/>
                        }
                        <Flex.Item>{this.props.model.get('title')}</Flex.Item>
                    </Flex>
                </List.Item>
            </SwipeAction>
        );
    }
}
