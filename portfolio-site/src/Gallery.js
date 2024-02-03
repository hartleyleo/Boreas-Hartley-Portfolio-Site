import Carousel from './Components/Carousel';

import instagramImage from './Media/Images/IMG_4752.png';

const Home = () => {

    return (
        <div>
            <Carousel image={instagramImage}/>
        </div>
    );

}

export default Home;