import React, { Component } from 'react'
import './Display.css'

class Display extends Component {
    state = {  } 
    render() { 
        return (
            <div className='display'>
                {this.props.value}
            </div>
        );
    }
}
 
export default Display;