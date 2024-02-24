import React, { useState, useEffect } from 'react';
import $ from 'jquery';

import calculateAverageRGB from '../JS/customFunctions';

const TabContent = ({ image }) => {

  return (
      <div>
          <img id="image-carousel-image" className="carousel-image" alt="instagram post for website" src={image} />
          <div className="gallery-info-container">
            <h1 className="gallery-info-title">
              Title
            </h1>
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

  useEffect(() => {
    // Slide animation when changing tabs
    $('.tab-content').hide();
    $(`.tab-content[data-tab=${activeTab}]`).fadeIn();
  }, [activeTab]);

  const handleTabChange = (direction) => {
    setActiveTab((prevTab) => {
      if (direction === 'left') {
        return prevTab > 1 ? prevTab - 1 : 6;
      } else {
        return prevTab < 6 ? prevTab + 1 : 1;
      }
    });
  };

  useEffect(() => {
    calculateAverageRGB(image[activeTab - 1])
      .then((avgRGB) => {
        setAverageRGB(avgRGB);
      })
      .catch((error) => {
        console.error('Error calculating average RGB:', error);
      });
  }, [activeTab, image]);

  let tabStyle = {
    backgroundColor: `rgb(${averageRGB.r}, ${averageRGB.g}, ${averageRGB.b})`,
    background: `linear-gradient(to left, rgba(${averageRGB.r}, ${averageRGB.g}, ${averageRGB.b}, 1), rgba(${averageRGB.r}, ${averageRGB.g}, ${averageRGB.b}, 0) 50%, rgba(${averageRGB.r}, ${averageRGB.g}, ${averageRGB.b}, 1))`,
  };

  return (
    <div className="carousel-container" style={tabStyle}>
      <div className="tab">
        <button onClick={() => handleTabChange('left')} className="Previous-Button">
          ←
        </button>

        {[1, 2, 3, 4, 5, 6].map((tab) => (
          <div key={tab} className="tab-content" data-tab={tab} style={{ display: tab === activeTab ? 'block' : 'none' }}>
            <TabContent image={image[tab - 1]} />
            {tab}
          </div>
        ))}

        <button onClick={() => handleTabChange('right')} className="Next-Button">
          →
        </button>
      </div>
    </div>
  );
};





















// const GalleryCarousel = ({ image }) => {

//   const [activeTab, setActiveTab] = useState(1);
//   const [averageRGB, setAverageRGB] = useState({ r: 255, g: 255, b: 255 });

//   // Function to handle tab change calls, takes in the direction in which to switch tabs
//   const handleTabChange = (direction) => {

//     // Calls state change from useState declaration for activeTab
//     setActiveTab((prevTab) => {

//       // Checks direction to switch to, also checks for exceeding min or max tab values and handles accordingly
//       if (direction === 'left') {
//         return prevTab > 1 ? prevTab - 1 : 5;
//       } else {
//         return prevTab < 5 ? prevTab + 1 : 1;
//       }
//     });
//   };

//   // Promise object follow up to get the values returned to the averageRGB
//   calculateAverageRGB(image[activeTab - 1]).then(avgRGB => {
//       setAverageRGB(avgRGB);
//   }).catch(error => {
//       console.error('Error calculating average RGB:', error);
//   });

//   // Styling used for the the background color of the tab
//   let tabStyle = {
//     backgroundColor: `rgb(${averageRGB.r}, ${averageRGB.g}, ${averageRGB.b})`,
//     background: `linear-gradient(to left, rgba(${averageRGB.r}, ${averageRGB.g}, ${averageRGB.b}, 1), rgba(${averageRGB.r}, ${averageRGB.g}, ${averageRGB.b}, 0) 50%, rgba(${averageRGB.r}, ${averageRGB.g}, ${averageRGB.b}, 1))`,
//   };

//   return (
//     <div className="carousel-container" style={tabStyle}>

//       <div className="tab">
//           <button onClick={() => handleTabChange('left')} className="Previous-Button">←</button>

//           {activeTab === 1 &&
//               <div>
//                   <TabContent image={image[0]}/> 1
//               </div>
//           }
//           {activeTab === 2 &&
//               <div>
//                   <TabContent image={image[1]}/> 2
//               </div>
//           }
//           {activeTab === 3 &&
//               <div>
//                   <TabContent image={image[2]}/> 3
//               </div>
//           }
//           {activeTab === 4 &&
//               <div>
//                   <TabContent image={image[3]}/> 4
//               </div>
//           }
//           {activeTab === 5 &&
//               <div>
//                   <TabContent image={image[4]}/> 4
//               </div>
//           }
//         <button onClick={() => handleTabChange('right')} className="Next-Button">→</button>
//       </div>
//     </div> 
//   );

// }
  
export default GalleryCarousel;