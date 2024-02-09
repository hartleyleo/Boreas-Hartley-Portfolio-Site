import Info from './Components/Info';
import Carousel from './Components/Carousel';

import instagramImage from './Media/Images/00.JPG';

const Home = () => {

    return (
        <div className="home-page">
            <Info />
            <Carousel image={instagramImage}/>
        </div>
    );

}

export default Home;