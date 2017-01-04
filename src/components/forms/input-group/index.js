import React, {Component} from 'react';
import './input.css';
import Icon from '../../icon';
import Input from '../input';

class InputGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value || '',
            inFocus: false
        }
        this.handleReset = this.handleReset.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleReset() {
        this.setState({
            value: '',
            inFocus: true
        });
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    render() {
        return (
            <div className={"input-holder " + this.props.className}>
                <Input
                    type={this.props.type}
                    id={this.props.id}
                    value={this.state.value}
                    disabled={this.props.disabled}
                    placeholder={this.props.placeholder}
                    onChange={this.handleChange}
                />
                {this.props.icon && <Icon type={this.props.icon} onClick={this.handleReset}/>}
            </div>
        );
    }
}

export default InputGroup;