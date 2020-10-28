import React, { Component } from 'react'
import Filter from './Filter.js';
import FilterData from '../data/filter-data.js';

export default class FilterList extends Component {
    state = {
        filterObject: {},
    }

    handleFilters = (returnVal) => {
        this.createObject(returnVal);
        this.props.function(this.state.filterObject);
    }

    createObject = (returnVal) => {
        let tempObject = this.state.filterObject;
        tempObject[returnVal.key] = returnVal.value;
        this.setState({
            filterObject: tempObject,
        })
    }

    render() {
        return (
            <ul className="filter-list">
                {FilterData.map((filter, i) => {
                    return <Filter onChange={this.handleFilters} data={filter} key={i} />
                })}
            </ul>
        )
    }
}
