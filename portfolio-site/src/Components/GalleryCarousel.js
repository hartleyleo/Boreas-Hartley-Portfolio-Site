import React, { useState, useEffect } from 'react';

import calculateAverageRGB from '../JS/customFunctions';

const TabContent = ({ image }) => {

  return (
      <div>
          <img id="image-carousel-image" className="carousel-image" alt="instagram post for website" src={image} />
          <div className="gallery-info-container">
            <div className="gallery-info-title">
              Title
            </div>
            <div className="gallery-info-description">
              Description
            </div>
          </div>
      </div>
  );

}

const GalleryCarousel = ({ image }) => {

  const [activeTab, setActiveTab] = useState(1);
  const [averageRGB, setAverageRGB] = useState({ r: 255, g: 255, b: 255 });

  const handleTabChange = (direction) => {
    setActiveTab((prevTab) => {
      if (direction === 'left') {
        return prevTab > 1 ? prevTab - 1 : 5;
      } else {
        return prevTab < 5 ? prevTab + 1 : 1;
      }
    });
  };

  calculateAverageRGB(image).then(avgRGB => {
      setAverageRGB(avgRGB);
  }).catch(error => {
      console.error('Error calculating average RGB:', error);
  });

  let tabStyle = {
      backgroundColor: `rgb(${averageRGB.r}, ${averageRGB.g}, ${averageRGB.b})`  
  };

  return (
    <div className="carousel-container" style={tabStyle}>

      <div className="tab">
          <button onClick={() => handleTabChange('left')} className="Previous-Button">←</button>

          {activeTab === 1 &&
              <div>
                  <TabContent image={image}/> 1
              </div>
          }
          {activeTab === 2 &&
              <div>
                  <TabContent image={image}/> 2
              </div>
          }
          {activeTab === 3 &&
              <div>
                  <TabContent image={image}/> 3
              </div>
          }
          {activeTab === 4 &&
              <div>
                  <TabContent image={image}/> 4
              </div>
          }
          {activeTab === 5 &&
              <div>
                  <TabContent image={image}/> 4
              </div>
          }
        <button onClick={() => handleTabChange('right')} className="Next-Button">→</button>
      </div>
    </div> 
  );

}
  
  export default GalleryCarousel;