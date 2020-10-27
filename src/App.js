import './App.css';
import Header from './components/Header.js';
import ImageList from './components/ImageList.js';
import images from './data/data.js';

function App() {
  return (
    <div className="App">
      <Header />
      <ImageList images={images} />
    </div>
  );
}

export default App;
