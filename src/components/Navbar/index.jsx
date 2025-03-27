import React, { useState } from "react";
import "./navbar.css";
import Container from "../Container";
import HamburguerMenu from "../HamburguerMenu";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import logo from '../../assets/images/ycommerce/favicon.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { cartCount } = useCart();

  const handleDropdownToggle = (isOpen) => {
    setDropdownOpen(isOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="main-navbar">
        <Container>
          <div className="topbar-section d-none d-lg-flex justify-content-between">
            <div className="topbar-links">
              <a href="#">Central do Vendedor</a>
              <span className="pipe">|</span>
              <a href="#">Vender no site</a>
              <span className="pipe">|</span>
              <a href="#">Baixe o App</a>
              <span className="pipe">|</span>
              <a href="#">Siga-nos</a>
            </div>
            <div className="topbar-options">
              <a href="#" className="topbar-icon">
                <i className="bi bi-bell"></i> Notificações
              </a>
              <span className="pipe">|</span>
              <a href="#" className="topbar-icon">
                <i className="bi bi-question-circle"></i> Ajuda
              </a>
              <span className="pipe">|</span>
              <Dropdown align="end">
                <Dropdown.Toggle variant="link" className="btn">
                  <i className="bi bi-globe"></i> Português - BR
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">English</Dropdown.Item>
                  <Dropdown.Item href="#">Português - BR</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <span className="pipe">|</span>
              <Link to="/cadastro">Cadastrar</Link>
              <span className="pipe">|</span>
              <Link to="/login">Entrar</Link>
            </div>
          </div>
          <div className="navbar-content container-fluid d-flex align-items-center justify-content-between">
            <HamburguerMenu className="hamburguer-button" toggleMenu={toggleMenu} />

            <Link className="navbar-brand d-flex align-items-center text-white" to="/">
              <img
                src={logo}
                alt="Logo"
                className="logo"
                style={{ width: '40px', height: '40px' }}
              />
            </Link>

            <form className="search-bar d-flex">
              <input
                className="form-control"
                type="search"
                placeholder="Buscar no site"
                aria-label="Search"
              />
              <button className="search-btn" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </form>

            <div className="nav-icons d-flex">
              <Link to="/carrinho">
                <i className="bi bi-cart3"></i>
                {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
              </Link>
            </div>
          </div>
        </Container>
      </nav>
      <div className={`side-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleMenu}>&times;</button>
        <div className="menu-logo">
          <img src="logo.png" alt="LOGO" />
        </div>
        <ul>
          <li><a href="#">Central do Vendedor</a></li>
          <li><a href="#">Vender no site</a></li>
          <li><a href="#">Baixe o App</a></li>
          <li><a href="#">Siga-nos</a></li>
          <li><a href="#">Notificações</a></li>
          <li><a href="#">Ajuda</a></li>
          <li>
            <Dropdown
              onToggle={handleDropdownToggle}
              className={dropdownOpen ? "show" : ""}
            >
              <Dropdown.Toggle variant="link" className="text-white w-100 text-start ps-0">
                <i className="bi bi-globe me-2"></i> Português - BR
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">English</Dropdown.Item>
                <Dropdown.Item href="#">Português - BR</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li><Link to="/cadastro">Cadastrar</Link></li>
          <li><Link to="/login">Entrar</Link></li>
        </ul>
      </div>
      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
};

export default Navbar;