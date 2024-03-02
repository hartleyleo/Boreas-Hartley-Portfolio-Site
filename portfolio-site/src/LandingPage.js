import React, { useEffect } from 'react';

import chime from './Media/Audio/chime.wav'
import landingAnimation from './JS/jQuery-LandingPage.js'

import "./Stylesheets/LandingPage.css";

const LandingPage = ({ open }) => {

    const playChime = () => {
        const audio = new Audio(chime);
        audio.play();
    }

    useEffect(() => {
        
        landingAnimation();

    }, []);


    return (
        <div className="landing-page">
            <div className="title">
                <div className="split-name">
                    <div className="1">B</div>
                    <div className="4">O</div>
                    <div className="3">R</div>
                    <div className="1">E</div>
                    <div className="5">A</div>
                    <div className="2">S</div>
                </div>
                <div className="split-name">
                    <div className="2">H</div>
                    <div className="3">A</div>
                    <div className="5">R</div>
                    <div className="1">T</div>
                    <div className="3">L</div>
                    <div className="2">E</div>
                    <div className="4">Y</div>
                </div>
            </div>
            <div>
                <button className="start-journey-button" onClick={() => {open(false);playChime();}}>Go</button>
            </div>
        </div>
    );
};

export default LandingPage;