import React from 'react';
import {NavBar, Icon} from 'antd-mobile';

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