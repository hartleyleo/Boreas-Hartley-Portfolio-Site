import Info from './Components/Info';
import Carousel from './Components/Carousel';

import instagramImage from './Media/Images/IMG_4752.png';

const Home = () => {

    return (
        <div className="home-page">
            <Info />
            <Carousel image={instagramImage}/>
        </div>
    );

}

export default Home;