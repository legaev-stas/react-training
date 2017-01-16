import React from 'react';
import './icon.css';

const Icon = ({type, onClick}) => (
    <div
        className={'icon ' + type}
        onClick={onClick}
    ></div>
)

export default Icon;