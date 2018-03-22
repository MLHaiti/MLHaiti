import React, { Component } from 'react';

class Input extends Component {
    render() {
        return (
            <div className="form-field">
                <input type={this.props.type} />
                <label for={this.props.label}>{this.props.label}</label>
            </div>
        );
    }
}

export default Input;