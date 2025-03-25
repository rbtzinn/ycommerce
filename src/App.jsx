import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Ads from "./components/Ads";
import Container from "./components/Container";
import Destaques from "./components/Destaques";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import Footer from "./components/Footer/index.jsx";
import Categorias from "./components/Categorias";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

function AppContent() {
  const location = useLocation();

  return (
    <>

      {!['/login', '/cadastro'].includes(location.pathname) && <Navbar />}

      <Container>
        <Routes>
          <Route path="/" element={
            <>
              <div className="grid-container">
                <div className="carousel-wrapper">
                  <Carousel />
                </div>
                <div className="ads-wrapper">
                  <Ads />
                </div>
              </div>
              <Categorias />
              <Destaques />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

import './sdk.jsx';
export default App;