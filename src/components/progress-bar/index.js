import React from 'react';
import './progress-bar.css';

const ProgressBar = ({value}) => (
    <div className="progress-bar">
        <div style={{
            width: 100 * value + '%'
        }}></div>
    </div>
);

export default ProgressBar;