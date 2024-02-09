import GalleryCarousel from "./Components/GalleryCarousel.js"
import getAverageRGBValue from "./JS/customFunctions.js"

import React, { useState } from 'react';

import calculateAverageRGB from './JS/customFunctions';

import imagePath from './Media/Images/02.JPG';


const GalleryPage = ({image}) => {

    // const [averageRGB, setAverageRGB] = useState({ r: 255, g: 255, b: 255 });

    // calculateAverageRGB(imagePath).then(avgRGB => {
    //     setAverageRGB(avgRGB);
    // }).catch(error => {
    //     console.error('Error calculating average RGB:', error);
    // });

    // let tabStyle = {
    //     backgroundColor: `rgb(${averageRGB.r}, ${averageRGB.g}, ${averageRGB.b})`
    // };



    return (
        <div className="gallery-page" >
            <GalleryCarousel image={image}></GalleryCarousel>
        </div>
    );

}

export default GalleryPage;