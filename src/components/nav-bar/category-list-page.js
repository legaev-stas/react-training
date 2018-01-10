import React from 'react';
import {SearchBar, Flex, WingBlank, Icon} from 'antd-mobile';


export const AppNavBar = ({addItem}) => (
    <Flex alignContent="center">
        <Flex.Item><SearchBar cancelText="Cancel"/></Flex.Item>
        <WingBlank>
            <Icon type="plus" size="sm" onClick={addItem} color="#108ee9"/>
        </WingBlank>
    </Flex>
)
