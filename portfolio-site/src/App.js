import './App.css';

import Navbar from './Components/Navbar';
import Info from './Components/Info';
import Carousel from './Components/Carousel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Navbar />
        <Info />
        <Carousel />
        <img alt="instagram post for website" src="Media/Images/IMG_4752.png" />

      </header>
    </div>
  );
}

export default App;
