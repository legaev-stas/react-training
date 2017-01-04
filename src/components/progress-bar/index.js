import React, {Component} from 'react';
import './progress-bar.css';

class ProgressBar extends Component {
    constructor(props){
        super(props);

        this.state = props;
    }

    render() {
        return (
            <div className="progress-bar"><div style={{
                width: 100 * this.state.value + '%'
            }}></div></div>
        );
    }
}

export default ProgressBar;