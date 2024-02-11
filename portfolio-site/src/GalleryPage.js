import GalleryCarousel from "./Components/GalleryCarousel.js"
import getAverageRGBValue from "./JS/customFunctions.js"

import React, { useState } from 'react';

import calculateAverageRGB from './JS/customFunctions';

import imagePath0 from './Media/Images/00.JPG';
import imagePath1 from './Media/Images/01.JPG';
import imagePath2 from './Media/Images/02.JPG';
import imagePath3 from './Media/Images/03.JPG';
import imagePath4 from './Media/Images/04.JPG';


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
            <GalleryCarousel image={[imagePath0, imagePath1, imagePath2, imagePath3, imagePath4]}></GalleryCarousel>
        </div>
    );

}

export default GalleryPage;