import React from 'react';
import Flex from 'antd-mobile/lib/flex';
import WingBlank from 'antd-mobile/lib/wing-blank';
import Switch from 'antd-mobile/lib/switch';
import WhiteSpace from 'antd-mobile/lib/white-space';


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

