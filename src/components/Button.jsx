import React, { Component } from 'react'
import './Button.css'

class Button extends Component {
    state = {  } 
    render() { 
        return (
            <button>{this.props.label}</button>
        );
    }
}
 
export default Button;
