// import React, { useState } from 'react';

import GalleryCarousel from "./GalleryCarousel";

const Navbar = ({changePageStateFunction}) => {

    const setPageStateGallery = (changePageStateFunction) => {
        changePageStateFunction(GalleryCarousel);
    }

    return (
        <div class="navbar-container">
            <div class="navbar-title-container">
                <div>Boreas Hartley</div>
            </div>
            <div class="navbar-button-container">
                <button class="nav-button" onClick={setPageStateGallery(changePageStateFunction)}>Gallery</button>
                <button class="nav-button">Commissions</button>
            </div>
        </div>
    );

}

export default Navbar;