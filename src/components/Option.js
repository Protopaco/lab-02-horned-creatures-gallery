import React, { Component } from 'react'

// creates individual options for drop down menus
export default class Option extends Component {
    render() {
        return (
            <option value={this.props.data}>
                {this.props.data}
            </option>
        )
    }
}
