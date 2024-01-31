import React, { useState } from 'react';

const Navbar = ({}) => {

    return (
        <div class="navbar-container">
            <div class="navbar-title-container">
                <div>Boreas Hartley</div>
            </div>
            <div class="navbar-button-container">
                <button class="nav-button">Gallery</button>
                <button class="nav-button">Commissions</button>
            </div>
        </div>
    );

}

export default Navbar;