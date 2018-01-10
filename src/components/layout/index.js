import React from 'react';
import './styles.css';

export const Page = ({children}) => (
    <div className="page">{children}</div>
);
export const Header = ({children}) => (
    <div className="page-nav-bar">{children}</div>
);
export const Content = ({children}) => (
    <div className="page-content">{children}</div>
);