import React from 'react';
import {NavBar, Icon} from 'antd-mobile';

export default ({goBack}) => (
    <NavBar
        mode="light"
        icon={<Icon type="left"/>}
        onLeftClick={goBack}
    >Edit task</NavBar>
)