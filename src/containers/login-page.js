import React from 'react';
import {FBLogin} from '../components/fb/login';
import Flex from 'antd-mobile/lib/flex';

export const LoginPage = ({onlogin}) => (
    <Flex justify="center" align="center" style={{minHeight: '100vh'}}>
        <FBLogin onlogin={onlogin}/>
    </Flex>
);
