import React from 'react';
import {Flex, WingBlank, Switch, WhiteSpace} from 'antd-mobile';


export const StatusFilter = ({filterShowCompleted, onFilterChange}) => (
    <WingBlank>
        <WhiteSpace/>
        <Flex>
            <Switch
                checked={filterShowCompleted}
                onChange={onFilterChange}
            />
            <Flex.Item>Show completed tasks </Flex.Item>
        </Flex>
        <WhiteSpace/>
    </WingBlank>
)

