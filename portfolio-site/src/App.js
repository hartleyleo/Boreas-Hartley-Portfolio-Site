import './Stylesheets/App.css';

import React, { useState } from 'react';

import Home from './Home.js';
import GalleryCarousel from './Components/GalleryCarousel.js';


function App() {

  const [pageState, setPageState] = useState(0);

  const setPageStateHelper = (state) => {
    setPageState(state);
  }

  return (
    <div className="App">
      <div className="App-header">
        
        <div className="navbar-container">
          <div className="navbar-title-container" onClick={() => setPageStateHelper(0)}>
            <div>Boreas Hartley</div>
          </div>
          <div className="navbar-button-container">
            <button className="nav-button" onClick={() => setPageStateHelper(1)}>Gallery</button>
            <button className="nav-button">Commissions</button>
          </div>
        </div>

        <div className="pages">
          {pageState === 0 && (<Home />)}
          {pageState === 1 && (<GalleryCarousel />)}
        </div>

      </div>
    </div>
  );
}

export default App;
