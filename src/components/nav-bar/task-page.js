import React from 'react';
import NavBar from 'antd-mobile/lib/nav-bar';
import Icon from 'antd-mobile/lib/icon';

export default ({goBack}) => (
    <NavBar
        mode="light"
        icon={<Icon type="left"/>}
        onLeftClick={goBack}
    >Edit task</NavBar>
)