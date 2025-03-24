import React from "react";
import "./hamburguerMenu.css";

const HamburguerMenu = ({ toggleMenu }) => {
    return (
        <button className="hamburguer-btn d-lg-none" onClick={toggleMenu}>
            ☰
        </button>
    );
};

export default HamburguerMenu;
