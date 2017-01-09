import React from 'react';
import './icon.css';

const Icon = ({type, onClick, eventRef}) => (
    <div
        className={'icon ' + type}
        onClick={() => onClick && eventRef ? onClick(eventRef) : null}
    ></div>
)

export default Icon;