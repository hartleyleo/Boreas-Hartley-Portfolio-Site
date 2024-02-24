import './Stylesheets/App.css';

import React, { useState, useEffect } from 'react';

import logo from './Media/Images/logo.png';

import LandingPage from './LandingPage.js';
import Home from './Home.js';
import GalleryPage from './GalleryPage.js';
import Commissions from './Commissions.js';


function App() {

  const [isLanding, setIsLanding] = useState(true);
  const [pageState, setPageState] = useState(0);
  const [pageTitle, setPageTitle] = useState("Boreas");

  const setPageStateHelper = (state) => {
    setPageState(state);
  }

  const setIsLandingHelper = (value) => {
    setIsLanding(value);
  }

  const setPageTitleHelper = (newTitle) => {
    setPageTitle(newTitle);
  };

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <div className="App">

      {isLanding === true && <LandingPage open={setIsLandingHelper}></LandingPage>}
      {isLanding === false && 
      
        <div className="App-header">
          
          {/* Navbar */}
          <div className="navbar-container">
            <div className="navbar-title-container" onClick={() => { setPageStateHelper(0); setPageTitleHelper("Boreas") }}>
              <div>Boreas Hartley</div>
            </div>
            <div className="navbar-logo"><img alt="logo for website" src={logo} /></div>
            <div className="navbar-button-container">
              <button className="nav-button" onClick={() => { setPageStateHelper(1); setPageTitleHelper("Gallery") }}>Gallery</button>
              <button className="nav-button" onClick={() => { setPageStateHelper(2); setPageTitleHelper("Commisions") }}>Commissions</button>
            </div>
          </div>

          {/* Body */}
          <div className="pages">
            {pageState === 0 && (<Home />)}
            {pageState === 1 && (<GalleryPage />)}
            {pageState === 2 && (<Commissions />)}
          </div>

          {/* Footer */}
          <div className="footer-container">
            <div>Authored by: Leon Hartley hartleyleo@uri.edu</div>
          </div>

        </div>
      
      }

    </div>
  );
}

export default App;
