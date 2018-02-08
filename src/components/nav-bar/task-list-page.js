import React from 'react';
import NavBar from 'antd-mobile/lib/nav-bar';
import Icon from 'antd-mobile/lib/icon';

export default ({title, goBack, addItem}) => (
    <NavBar
        mode="light"
        icon={<Icon type="left"/>}
        onLeftClick={goBack}
        rightContent={[
            <Icon type="plus" size="sm" onClick={addItem}/>
        ]}
    >{title}</NavBar>
)