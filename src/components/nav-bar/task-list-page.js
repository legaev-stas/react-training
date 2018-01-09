import React from 'react';
import {NavBar, Icon} from 'antd-mobile';

export default ({title, goBack}) => (
    <NavBar
        mode="light"
        icon={<Icon type="left"/>}
        onLeftClick={goBack}
        // rightContent={[
        //     <Icon key="0" type="search" style={{marginRight: '16px'}}/>,
        //     <Icon key="1" type="ellipsis"/>,
        // ]}
    >{title}</NavBar>
)