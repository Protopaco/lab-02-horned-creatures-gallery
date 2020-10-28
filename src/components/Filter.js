import React, { Component } from 'react'
import Option from './Option.js';
import images from '../data/data.js'

export default class Filter extends Component {

    handleSelection = (e) => {
        let returnValue = e.target.value;
        this.props.onChange({ key: this.props.data.key, value: returnValue });
    }
    render() {
        let returnedArray = [];
        if (this.props.data.optionFunction) {
            returnedArray = this.props.data.optionFunction(images);
        };

        return (

            <li className="filter-li">
                <p className="menu-title">{this.props.data.title}</p>
                <select onChange={this.handleSelection}>
                    {returnedArray.map((option, i) => {
                        return <Option data={option} key={i} />
                    })}
                </select>
            </li>
        )
    }
}
