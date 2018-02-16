import React from 'react';
import FacebookLogin from 'react-facebook-login';
import {fbAppId} from '../../config';

export const FBLogin = ({onlogin}) => (
    <FacebookLogin
        appId={fbAppId}
        // autoLoad={true}
        fields="name,email"
        redirectUri={location.href}
        callback={onlogin}
        onFailure={response => {
            console.log(response);
        }}
    />
);