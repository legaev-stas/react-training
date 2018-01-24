import React from 'react';
import {Flex, WingBlank, Switch, WhiteSpace} from 'antd-mobile';


export const StatusFilter = ({checked, onChange}) => (
    <WingBlank>
        <WhiteSpace/>
        <Flex>
            <Switch
                checked={checked}
                onChange={onChange}
            />
            <Flex.Item>Show completed tasks </Flex.Item>
        </Flex>
        <WhiteSpace/>
    </WingBlank>
)

