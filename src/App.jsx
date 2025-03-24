import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Ads from "./components/Ads";
import Container from "./components/Container";
import Destaques from "./components/Destaques";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

function App() {
  return (
    <div>
        <Navbar />
      <Container> 
        <div className="grid-container">
          <div className="carousel-wrapper">
            <Carousel />
          </div>
          <div className="ads-wrapper">
            <Ads />
          </div>
        </div>
        <div>
        <Destaques/>
        </div>
      </Container>
    </div>
  );
}

export default App;
