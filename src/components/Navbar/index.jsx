import React, { useState } from "react";
import "./navbar.css";
import HamburguerMenu from "../HamburguerMenu";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import logo from '../../assets/images/ycommerce/favicon.png';
import { NavbarCart } from "./NavbarCart";
import { NavbarSearch } from "./NavbarSearch";
import { NavbarSideMenu } from "./NavbarSideMenu";
import { NavbarTopbar } from "./NavbarTopbar";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { cartItems, removeFromCart } = useCart();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const calculateTotal = () => cartItems.reduce((total, item) => total + item.preco, 0).toFixed(2);

  return (
    <>
      <nav className="main-navbar">
        {/* Removido o Container aqui */}
        <NavbarTopbar />
        
        <div className="navbar-content d-flex align-items-center justify-content-between py-2">
          <HamburguerMenu className="hamburguer-button" toggleMenu={toggleMenu} />

          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src={logo}
              alt="Logo"
              className="logo"
              style={{ width: '40px', height: '40px' }}
            />
          </Link>

          <NavbarSearch />

          <div className="nav-icons d-flex">
            <NavbarCart 
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              calculateTotal={calculateTotal}
              showCart={showCart}
              setShowCart={setShowCart}
            />
          </div>
        </div>
      </nav>

      <NavbarSideMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Navbar;