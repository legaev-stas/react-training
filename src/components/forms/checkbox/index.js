import React, {Component} from 'react';
import './checkbox.css';

class Checkbox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: !!props.checked,
            id: props.id || 'checkbox_' + new Date().valueOf(),
            disabled: props.disabled,
            inFocus: false
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick = () => {
        this.setState((prevState, props) =>({
            checked: !prevState.checked
        }));
    }

    render() {
        return (
            <div className={"css-checkbox " + this.props.className}>
                <input
                    id={this.state.id}
                    type="checkbox"
                    checked={this.state.checked}
                    disabled={this.state.disabled}
                    onChange={this.onClick}
                />
                <label htmlFor={this.state.id}>{this.props.children}</label>
            </div>
        );
    }
}

export default Checkbox;