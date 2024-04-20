import GalleryCarousel from "./Components/GalleryCarousel.js"
import React, { useState, useEffect } from 'react'

const GalleryPage = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://hartleyleo.rhody.dev/portfolio-site-v10/php/getImages.php');
                if (!response.ok) {
                    throw new Error('Something went wrong fetching the data');
                }
                const data = await response.json();
                setImages(data);
            } catch (error) {
                console.error('Error while fetching data :( ->', error);
            }
        };

        fetchData();
    }, []);

    console.log(images);

    return (
        <div className="gallery-page" >
            <GalleryCarousel image={images}></GalleryCarousel>
        </div>
    );

}

export default GalleryPage;