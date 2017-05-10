import React, {Component} from 'react';
import './checkbox.css';

class Checkbox extends Component {
    constructor (props){
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        this.props.onChange(e.target.checked);
    }

    render (){
        const {children, checked} = this.props;
        return (
            <div className="checkbox-wrapper">
                <label>
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={this.onChange}
                    />
                    {children}
                </label>
            </div>
        )
    }
}

export default Checkbox;