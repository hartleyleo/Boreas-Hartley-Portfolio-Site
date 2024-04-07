import GalleryCarousel from "./Components/GalleryCarousel.js"
import React, { useState, useEffect } from 'react'

import imagePath2 from './Media/Images/02.JPG';
import imagePath3 from './Media/Images/03.JPG';
import imagePath5 from './Media/Images/05.JPG';
import imagePath4 from './Media/Images/04.JPG';
import imagePath0 from './Media/Images/00.JPG';
import imagePath1 from './Media/Images/01.JPG';

const GalleryPage = () => {

    const [images, setImages] = useState([
        {
            path: imagePath3,
            title: "Bo & Mara",
            descrip: "Two of us lost in game",
        },
        {
            path: imagePath5,
            title: "Cardinality",
            descrip: "Sullen love",
        },
        {
            path: imagePath2,
            title: "Abstraction",
            descrip: "Untold stories",
        },
        {
            path: imagePath4,
            title: "Lost Lover",
            descrip: "A feeling unwished",
        },
        {
            path: imagePath0,
            title: "Display",
            descrip: "Those unfounded",
        },
        {
            path: imagePath1,
            title: "King Regent",
            descrip: "Above all",
        }
    ]);

    // useEffect(() => {
    //     fetch('./JS/php.php')
    //         .then(response => response.json())
    //         .then(jsonData => setImages(jsonData));
    //     console.log(images)
    // }, []);



    return (
        <div className="gallery-page" >
            <GalleryCarousel image={images}></GalleryCarousel>
        </div>
    );

}

export default GalleryPage;