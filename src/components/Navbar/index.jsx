import React, { useState } from "react";
import "./navbar.css";
import HamburguerMenu from "../HamburguerMenu";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import logo from '../../assets/images/ycommerce/YCommerce---letreiro.png';
import { NavbarCart } from "./NavbarCart";
import { NavbarSearch } from "./NavbarSearch";
import { NavbarSideMenu } from "./NavbarSideMenu";
import { NavbarTopbar } from "./NavbarTopbar";
import Container from "../Container";
import logomob from '../../assets/images/ycommerce/favicon.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { cartItems, removeFromCart } = useCart();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const calculateTotal = () => cartItems.reduce((total, item) => total + item.preco, 0).toFixed(2);

  return (
    <>
      <nav className="main-navbar">
        <Container>
          <NavbarTopbar />
          <div className="navbar-content d-flex align-items-center justify-content-between py-2">
            <HamburguerMenu className="hamburguer-button" toggleMenu={toggleMenu} />
            <Link className="navbar-brand d-flex d-lg-none align-items-center" to="/">
              <img
                src={logomob}
                alt="Logo"
                className="logo"
                style={{ height: '40px' }}
              />
            </Link>
            <Link className="navbar-brand d-none d-lg-flex align-items-center" to="/">
              <img
                src={logo}
                alt="Logo"
                className="logo"
                style={{ height: '40px' }}
              />
            </Link>

            <NavbarSearch />

            <div className="nav-icons d-flex me-4">
              <NavbarCart 
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                calculateTotal={calculateTotal}
                showCart={showCart}
                setShowCart={setShowCart}
              />
            </div>
          </div>
        </Container>
      </nav>

      <NavbarSideMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Navbar;
