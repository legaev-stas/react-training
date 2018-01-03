import React from 'react';
import {SwipeAction, List, Modal, Badge} from 'antd-mobile';


export class CategoryItem extends React.Component {
    constructor(props) {
        super(props);

        this.editHandler = this.editHandler.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);
        this.openCategory = this.openCategory.bind(this);
    }

    deleteHandler() {
        let heading = 'Delete Category';
        let message = `Are you sure? The category contains ${this.props.uncompletedTasksNumber} uncompleted tasks`;
        if (this.props.uncompletedTasksNumber) {
            Modal.alert(heading, message, [
                {text: 'Cancel', style: 'default'},
                {text: 'OK', onPress: () => this.props.deleteHandler(this.props.id)},
            ]);
        } else {
            this.props.deleteHandler(this.props.id);
        }
    }

    openCategory() {
        this.props.openCategory(this.props.id);
    }

    editHandler() {
        let that = this;
        Modal.prompt('Update category name', '',
            [
                {text: 'Cancel'},
                {
                    text: 'Update',
                    onPress: name => new Promise((resolve) => {
                        that.props.editHandler({
                            id: that.props.id,
                            name
                        });
                        resolve();
                    }),
                },
            ], 'default', that.props.name);
    }

    render() {
        return (
            <SwipeAction
                style={{backgroundColor: 'gray'}}
                autoClose
                right={[
                    {
                        text: 'Delete',
                        onPress: this.deleteHandler,
                        style: {backgroundColor: 'red', color: 'white'},
                    }
                ]}
                left={[
                    {
                        text: 'Edit',
                        onPress: this.editHandler,
                        style: {backgroundColor: 'blue', color: 'white'},
                    }
                ]}
            >
                <List.Item
                    onClick={this.openCategory}
                    extra={<Badge text={this.props.uncompletedTasksNumber} overflowCount={10}/>}
                >{this.props.name}</List.Item>
            </SwipeAction>
        );
    }
}
