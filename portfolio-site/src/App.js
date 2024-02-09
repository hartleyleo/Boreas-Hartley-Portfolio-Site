import './Stylesheets/App.css';

import React, { useState, useEffect } from 'react';

import instagramImage from './Media/Images/02.JPG';
import logo from './Media/Images/logo.png';

import Home from './Home.js';
import GalleryPage from './GalleryPage.js';


function App() {

  const [pageState, setPageState] = useState(0);
  const [pageTitle, setPageTitle] = useState("Boreas");

  const setPageStateHelper = (state) => {
    setPageState(state);
  }

  const setPageTitleHelper = (newTitle) => {
    setPageTitle(newTitle);
  };

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <div className="App">
      <div className="App-header">
        
        <div className="navbar-container">
          <div className="navbar-title-container" onClick={() => setPageStateHelper(0)}>
            <div>Boreas Hartley</div>
          </div>
          <div className="navbar-logo"><img alt="logo for website" src={logo} /></div>
          <div className="navbar-button-container">
            <button className="nav-button" onClick={() => { setPageStateHelper(1); setPageTitleHelper("Gallery") }}>Gallery</button>
            <button className="nav-button">Commissions</button>
          </div>
        </div>

        <div className="pages">
          {pageState === 0 && (<Home />)}
          {pageState === 1 && (<GalleryPage image={instagramImage} />)}
        </div>

        <div className="footer-container">
          <div>Authored by: Leon Hartley hartleyleo@uri.edu</div>
        </div>

      </div>
    </div>
  );
}

export default App;
