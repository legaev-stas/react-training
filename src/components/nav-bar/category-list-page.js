import React from 'react';
import {SearchBar, Flex, WingBlank, Icon, Modal} from 'antd-mobile';


export class AppNavBar extends React.Component {
    constructor(props) {
        super(props);

        this.addCategory = this.addCategory.bind(this);
    }

    addCategory() {
        let that = this;
        Modal.prompt('Create category', '',
            [
                {text: 'Cancel'},
                {
                    text: 'Create',
                    onPress: value => new Promise((resolve) => {
                        that.props.addCategory(value);
                        resolve();
                    }),
                },
            ], 'default', null, ['Category name']);
    }

    render() {
        return (
            <Flex alignContent="center">
                <Flex.Item><SearchBar cancelText="Cancel"/></Flex.Item>
                <WingBlank>
                    <Icon type="plus" size="sm" onClick={this.addCategory}/>
                </WingBlank>
            </Flex>
        )
    }
}
