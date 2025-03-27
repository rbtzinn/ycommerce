import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import logomob from '../../assets/images/ycommerce/favicon.png'

export const NavbarSideMenu = ({ menuOpen, toggleMenu }) => (
  <>
    <div className={`side-menu ${menuOpen ? "open" : ""}`}>
      <button className="btn btn-link text-white fs-4 position-absolute top-0 end-0 p-2" onClick={toggleMenu}>&times;</button>
      <div className="text-center mb-4">
        <img src={logomob} alt="LOGO" className="img-fluid mt-2" style={{ width: '40px' }} />
      </div>
      <ul className="list-unstyled ms-3">
        <li className="py-1"><a href="#" className="text-white text-decoration-none d-block py-1">Central do Vendedor</a></li>
        <li className="py-1"><a href="#" className="text-white text-decoration-none d-block py-1">Vender no site</a></li>
        <li className="py-1"><a href="#" className="text-white text-decoration-none d-block py-1">Baixe o App</a></li>
        <li className="py-1"><a href="#" className="text-white text-decoration-none d-block py-1">Siga-nos</a></li>
        <li className="py-1"><a href="#" className="text-white text-decoration-none d-block py-1">Notificações</a></li>
        <li className="py-1"><a href="#" className="text-white text-decoration-none d-block py-1">Ajuda</a></li>
        <li className="py-1">
          <Dropdown>
            <Dropdown.Toggle variant="link" className="text-white text-decoration-none w-100 text-start ps-0 py-1">
              <i className="bi bi-globe me-2"></i> Português - BR
            </Dropdown.Toggle>
            <Dropdown.Menu className="border-0 shadow">
              <Dropdown.Item href="#">English</Dropdown.Item>
              <Dropdown.Item href="#">Português - BR</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
        <li className="py-1"><Link to="/cadastro" className="text-white text-decoration-none d-block py-1">Cadastrar</Link></li>
        <li className="py-1"><Link to="/login" className="text-white text-decoration-none d-block py-1">Entrar</Link></li>
      </ul>
    </div>
    
    {menuOpen && <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark opacity-50 z-index-999" onClick={toggleMenu}></div>}
  </>
);