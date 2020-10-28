import './App.css';
import React from 'react'
import Header from './components/Header.js';
// import FilterList from './components/FilterList.js'
import ImageList from './components/ImageList.js';
import images from './data/data.js';
import SearchBar from './components/SearchBar.js';

export default class App extends React.Component {
  state = {
    filterArray: [],
    displayedImages: images,
  }
  // when the user changes a drop down menu, the information is stored in "filterArray"
  // handleFilters = (returnedObject) => {
  //   this.setState({
  //     filterArray: returnedObject,
  //   })
  // }
  // when the user pushes the 'search' button it applies the filters to the images list
  // and returns those that meet all of the conditions
  // applyFilters = () => {

  //   let filterKeyArray = Object.keys(this.state.filterArray);

  //   let filteredImages = images.filter((image) => {
  //     // filters using a for loop through all of the filters applied 
  //     let include = true;
  //     for (let key of filterKeyArray) {
  //       if (!image[key].toString().includes(this.state.filterArray[key]) && this.state.filterArray[key] !== 'any') {
  //         include = false;
  //       }
  //     }
  //     return include;
  //   })

  //   this.setState({
  //     displayedImages: filteredImages,
  //   })

  // }

  handleSearch = (e) => {
    let filteredImages = images.filter((image) => {
      let searchValue = e.target.value.toLowerCase();
      let imageValues = (image.horns + image.description + image.title + image.keyword).toLowerCase();
      if (imageValues.includes(searchValue)) {
        return true;
      }
      return false;
    })
    this.setState({
      displayedImages: filteredImages,
    })

  }


  render() {



    return (
      <div className="App">
        <Header />
        {/* <FilterList function={this.handleFilters} /> */}
        <SearchBar onChange={this.handleSearch} />
        {/* <button value="search" onClick={this.applyFilters}>Search</button> */}
        <ImageList images={this.state.displayedImages} />
      </div>
    );
  }
}
