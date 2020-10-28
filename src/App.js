import './App.css';
import React from 'react'
import Header from './components/Header.js';
import FilterList from './components/FilterList.js'
import ImageList from './components/ImageList.js';
import images from './data/data.js';

export default class App extends React.Component {
  state = {
    filterArray: [],
    displayedImages: images,
  }

  handleFilters = (returnedObject) => {
    this.setState({
      filterArray: returnedObject,
    })
  }

  applyFilters = () => {

    let filterKeyArray = Object.keys(this.state.filterArray);

    let filterdImages = images.filter((image) => {

      let include = true;
      for (let key of filterKeyArray) {
        if (!image[key].toString().includes(this.state.filterArray[key]) && this.state.filterArray[key] !== 'any') {
          include = false;
        }
      }
      return include;
    })

    this.setState({
      displayedImages: filterdImages,
    })
    console.log(this.state.displayedImages);

  }


  render() {



    return (
      <div className="App">
        <Header />
        <FilterList function={this.handleFilters} />
        <button value="search" onClick={this.applyFilters}>Search</button>
        <ImageList images={this.state.displayedImages} />
      </div>
    );
  }
}
