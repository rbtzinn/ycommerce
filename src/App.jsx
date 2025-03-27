import React from "react";
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
import Reviews from "./components/Reviews";
import { CartProvider } from "./context/CartContext";
import CentralVendedor from "./components/CentralVendedor/index.jsx";
import LojasPrincipais from "./components/LojasPrincipais/index.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import './sdk.jsx';

function AppContent() {
  const location = useLocation();
  const isCentralVendedor = location.pathname === "/central-vendedor";
  const hasNavbar = !['/login', '/cadastro', '/central-vendedor'].includes(location.pathname);

  return (
    <div className={hasNavbar ? "with-navbar" : ""}>
      {/* Exibe a Navbar apenas onde necessário */}
      {hasNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={
          <>
            <Container>
              <div className="grid-container">
                <div className="carousel-wrapper">
                  <Carousel />
                </div>
                <div className="ads-wrapper">
                  <Ads />
                </div>
              </div>
              <Categorias />
              <LojasPrincipais/>
              <Destaques />
            </Container>
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/reviews/:id" element={<Reviews />} />
        <Route path="/central-vendedor" element={<CentralVendedor />} />
      </Routes>

      {/* Exibe o Footer onde necessário */}
      {!isCentralVendedor && <Footer />}
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
}

export default App;
