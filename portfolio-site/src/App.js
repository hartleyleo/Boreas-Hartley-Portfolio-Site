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

      </header>
    </div>
  );
}

export default App;
