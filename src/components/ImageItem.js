import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <li className="image-li">
                <p className="title">{this.props.image.title}</p>
                <img className="image-image" src={this.props.image.url} alt={this.props.image.title} />
                <p className="description">{this.props.image.description}</p>
                <p className="num-horns"># of horns: {this.props.image.horns}</p>
            </li>
        )
    }
}
