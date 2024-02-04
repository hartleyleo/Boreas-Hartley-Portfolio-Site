import './Stylesheets/App.css';

import React, { useState } from 'react';

import instagramImage from './Media/Images/IMG_4752.png';
import logo from './Media/Images/logo.png';

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
          <div className="navbar-logo"><img alt="logo for website" src={logo} /></div>
          <div className="navbar-button-container">
            <button className="nav-button" onClick={() => setPageStateHelper(1)}>Gallery</button>
            <button className="nav-button">Commissions</button>
          </div>
        </div>

        <div className="pages">
          {pageState === 0 && (<Home />)}
          {pageState === 1 && (<GalleryCarousel image={instagramImage} />)}
        </div>

        <div className="footer-container">
          <div>Authored by: Leon Hartley hartleyleo@uri.edu</div>
        </div>

      </div>
    </div>
  );
}

export default App;
