import GalleryCarousel from "./Components/GalleryCarousel.js"

import imagePath0 from './Media/Images/02.JPG';
import imagePath1 from './Media/Images/03.JPG';
import imagePath2 from './Media/Images/05.JPG';
import imagePath3 from './Media/Images/04.JPG';
import imagePath4 from './Media/Images/00.JPG';
import imagePath5 from './Media/Images/01.JPG';


const GalleryPage = () => {

    return (
        <div className="gallery-page" >
            <GalleryCarousel image={[imagePath0, imagePath1, imagePath2, imagePath3, imagePath4, imagePath5]}></GalleryCarousel>
        </div>
    );

}

export default GalleryPage;