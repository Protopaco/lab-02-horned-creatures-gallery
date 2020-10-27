import React, { Component } from 'react';
import ImageItem from './ImageItem.js';

export default class ImageList extends Component {
    render() {
        return (
            <ul className="image-list">
                {this.props.images.map((image, i) => {
                    return <ImageItem image={image} key={i} />
                })}
            </ul>
        )
    }
}
