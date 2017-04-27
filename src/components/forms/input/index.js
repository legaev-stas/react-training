import React, {Component} from 'react';

class Input extends Component {
    constructor (props){
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        this.props.onChange(e.target.value);
    }

    render (){
        const {type, id, value, disabled, placeholder} = this.props;
        return (
            <input
                type={type}
                id={id}
                value={value}
                disabled={disabled}
                placeholder={placeholder}
                onChange={this.onChange}
            />
        )
    }
}

export default Input;