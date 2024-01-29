import React, { useState } from 'react';

const Navbar = ({}) => {

    return (
        <div class="navbar-container">
            <div class="title">Boreas Hartley</div>
            <div>
                <button class="nav-button">Gallery</button>
            </div>
            <div>
                <button class="nav-button">Commissions</button>
            </div>
        </div>
    );

}

export default Navbar;