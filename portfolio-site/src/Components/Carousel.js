import React, { useState } from 'react';

const TabContent = () => {

    return (
        <div>
            Teehee
        </div>
    );

}

const Carousel = () => {

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
                    <TabContent /> 1
                </div>
            }
            {activeTab === 2 &&
                <div>
                    <TabContent /> 2
                </div>
            }
            {activeTab === 3 &&
                <div>
                    <TabContent /> 3
                </div>
            }
            {activeTab === 4 &&
                <div>
                    <TabContent /> 4
                </div>
            }
            {activeTab === 5 &&
                <div>
                    <TabContent /> 5
                </div>
            }
          <button onClick={() => handleTabChange('right')} className="Next-Button">→</button>
        </div>
      </div> 
    );
  };
  
  export default Carousel;