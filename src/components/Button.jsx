import React, { Component } from 'react'
import './Button.css'

class Button extends Component {
    state = {  }

    render() { 
        let classes = 'button '
        classes += this.props.operation ? 'operation ' : '' 
        classes += this.props.double ? 'double ' : ''
        classes += this.props.triple ? 'triple' : ''
        
        return (
            <button 
                onClick={e => this.props.click && this.props.click (this.props.label)}
                className={classes}>
                {this.props.label}
            </button>
        );
    }
}
 
export default Button;
