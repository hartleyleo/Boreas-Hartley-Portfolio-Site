import React, { useState, useEffect } from 'react';
import $ from 'jquery';


// Redundant - Used for assignments
// import { loadJSON, loadXML } from '../JS/GetLoads';

// const titlexmldata = 'https://hartleyleo.rhody.dev/portfolio-site-v5/Data/Titles.xml';
// const descriptionjsondata = 'https://hartleyleo.rhody.dev/portfolio-site-v5/Data/Descriptions.json';

const TabContent = ({ image, title, description }) => {

    return (
        <div>
            <img id="image-carousel-image" className="carousel-image" alt="instagram post for website" src={image} />
            <div className="gallery-info-container">
                <h1 className="gallery-info-title">
                { title }
                </h1>
                <div className="gallery-info-description">
                { description }
                </div>
            </div>
        </div>
    );

}

const GalleryCarousel = ({ image, averageRGBs }) => {

    const [activeTab, setActiveTab] = useState(1);
    const [averageRGB, setAverageRGB] = useState({ r: 255, g: 255, b: 255 });

    const totalImages = image.length;

    // Redundant - Used for assignments
    // const [titles, setTitles] = useState([]);
    // const [currentTitle, setCurrentTitle] = useState("");
    // const [descriptions, setDescriptions] = useState([]);
    // const [currentDescrip, setCurrentDescrip] = useState("");

    // Redundant - Used for assignments
    // useEffect(() => {
    //   loadXML(titlexmldata)
    //     .then(titles => {
    //         console.log(titles);
    //         setTitles(titles);
    //     })
    //     .catch(error => {
    //         console.error('Error:', error);
    //   });

    //   loadJSON(descriptionjsondata)
    //     .then(descriptions => {
    //         setDescriptions(descriptions);
    //     })
    //     .catch(error => {
    //         console.error('Error:', error);
    //   });
    // }, []);

    useEffect(() => {
        // Slide animation when changing tabs
        $('.tab-content').hide();
        $(`.tab-content[data-tab=${activeTab}]`).fadeIn();
    }, [activeTab]);

    const handleTabChange = (direction) => {
        setActiveTab((prevTab) => {
            if (direction === 'left') {
                let newTab = prevTab > 1 ? prevTab - 1 : totalImages;
                // setCurrentTitle(titles[newTab - 1]);
                // setCurrentDescrip(descriptions[newTab - 1]);
                return newTab;
            } else {
                let newTab = prevTab < totalImages ? prevTab + 1 : 1;
                // setCurrentTitle(titles[newTab - 1]);
                // setCurrentDescrip(descriptions[newTab - 1]);
                return newTab;
            }
        });
    };

    let tabStyle = {
        backgroundColor: `rgb(${averageRGB.r}, ${averageRGB.g}, ${averageRGB.b})`,
        background: `linear-gradient(to left, rgba(${averageRGB.r}, ${averageRGB.g}, ${averageRGB.b}, 1), rgba(${averageRGB.r}, ${averageRGB.g}, ${averageRGB.b}, 0) 50%, rgba(${averageRGB.r}, ${averageRGB.g}, ${averageRGB.b}, 1))`,
    };

    return (
        <div className="carousel-container" style={tabStyle}>
        <div className="tab">
            <button onClick={() => handleTabChange('left')} className="Previous-Button" id="Previous-Button">
            ←
            </button>

            {image.map((imageObj, tab) => (
                <div key={tab + 1} className="tab-content" data-tab={tab + 1} style={{ display: tab === activeTab - 1 ? 'block' : 'none' }}>
                    <TabContent
                        id="tab-image"
                        image={imageObj.link}
                        title={imageObj.title}
                        description={imageObj.descrip}
                    />
                </div>
            ))}

            <button onClick={() => handleTabChange('right')} className="Next-Button" id="Next-Button">
            →
            </button>
        </div>
        </div>
    );
};

export default GalleryCarousel;