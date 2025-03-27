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
  const [showCart, setShowCart] = useState(false);
  const { cartItems, removeFromCart } = useCart();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.preco, 0).toFixed(2);
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
                <Dropdown.Toggle variant="link" className="btn pt-br">
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
              <Dropdown 
                align="end" 
                show={showCart}
                onMouseEnter={() => setShowCart(true)}
                onMouseLeave={() => setShowCart(false)}
                className="cart-dropdown"
              >
                <Dropdown.Toggle as="div" className="cart-dropdown-toggle p-0">
                  <div className="position-relative">
                    <i className="bi bi-cart3 fs-4 text-white"></i>
                    {cartItems.length > 0 && (
                      <span className="cart-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {cartItems.length}
                        <span className="visually-hidden">itens no carrinho</span>
                      </span>
                    )}
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="cart-dropdown-menu p-0">
                  <div className="cart-dropdown-container">
                    <div className="cart-dropdown-header p-3 border-bottom">
                      <h6 className="m-0">Meu Carrinho ({cartItems.length} {cartItems.length === 1 ? 'item' : 'itens'})</h6>
                    </div>
                    
                    {cartItems.length > 0 ? (
                      <>
                        <div className="cart-items-list">
                          {cartItems.map((item, index) => (
                            <Dropdown.Item key={index} className="cart-item p-3 border-bottom">
                              <div className="d-flex align-items-center">
                                <img 
                                  src={item.imagem} 
                                  alt={item.nome} 
                                  className="cart-item-image me-3 rounded" 
                                  style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                                />
                                <div className="cart-item-info flex-grow-1">
                                  <span className="cart-item-name d-block text-truncate">{item.nome}</span>
                                  <span className="cart-item-price d-block text-primary fw-bold">R$ {item.preco.toFixed(2)}</span>
                                  <span className="cart-item-quantity text-muted small">Quantidade: 1</span>
                                </div>
                                <button 
                                  className="btn btn-sm btn-outline-danger ms-2"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    removeFromCart(index);
                                  }}
                                >
                                  <i className="bi bi-trash"></i>
                                </button>
                              </div>
                            </Dropdown.Item>
                          ))}
                        </div>
                        <div className="cart-dropdown-footer p-3 border-top">
                          <div className="d-flex justify-content-between mb-3">
                            <span className="fw-bold">Total:</span>
                            <span className="fw-bold text-primary">R$ {calculateTotal()}</span>
                          </div>
                          <Link 
                            to="/carrinho" 
                            className="btn btn-primary w-100 py-2 fw-bold"
                          >
                            Finalizar Compra
                          </Link>
                        </div>
                      </>
                    ) : (
                      <div className="empty-cart p-4 text-center">
                        <i className="bi bi-cart-x fs-1 text-muted mb-2"></i>
                        <p className="mb-0">Seu carrinho está vazio</p>
                        <Link to="/" className="btn btn-outline-primary mt-3">
                          Continuar comprando
                        </Link>
                      </div>
                    )}
                  </div>
                </Dropdown.Menu>
              </Dropdown>
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
            <Dropdown>
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