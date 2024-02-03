import React, { useState } from 'react';


const TabContent = ({ image }) => {

    return (
        <div>
            <img className="carousel-image" alt="instagram post for website" src={image} />
        </div>
    );

}

const GalleryCarousel = ({ image }) => {

    const [activeTab, setActiveTab] = useState(1);
  
    const handleTabChange = (direction) => {
      setActiveTab((prevTab) => {
        if (direction === 'left') {
          return prevTab > 1 ? prevTab - 1 : 5;
        } else {
          return prevTab < 5 ? prevTab + 1 : 1;
        }
      });
    };
  
    return (
      <div className="carousel-container">
  
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
                    <TabContent image={image}/> 5
                </div>
            }
          <button onClick={() => handleTabChange('right')} className="Next-Button">→</button>
        </div>
      </div> 
    );
  };
  
  export default GalleryCarousel;