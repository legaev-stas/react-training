import React from 'react';
import './icon.css';

const Icon = ({type, onClick, eventRef}) => (
    <div
        className={'icon ' + type}
        onClick={(e) => onClick && eventRef ? onClick(eventRef) : onClick(e)}
    ></div>
)

export default Icon;