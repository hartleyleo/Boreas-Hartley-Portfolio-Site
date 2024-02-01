import './App.css';

import React, { useState } from 'react';

import Home from './Home.js';
import Gallery from './Gallery.js';
import GalleryCarousel from './Components/GalleryCarousel.js';

import Navbar from './Components/Navbar';

function App() {

  const [currentPageState, setCurrentPageState] = useState(Home);

  const setCurrentPageStateHelper = (state) => {
    setCurrentPageState(state);
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <Navbar changePageStateFunction={setCurrentPageStateHelper}/>

        {currentPageState == Home && <Home />}
        {currentPageState == GalleryCarousel && <GalleryCarousel />}
        
        

      </header>
    </div>
  );
}

export default App;
