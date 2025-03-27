import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";

export const NavbarTopbar = () => (
  <div className="topbar-section d-none d-lg-flex justify-content-between py-1">
    <div className="topbar-links d-flex align-items-center">
      <Link to="/central-vendedor" className="text-white text-decoration-none d-inline-flex align-items-center px-2">
        Central do Vendedor
      </Link>
      <span className="text-white mx-1">|</span>
      <a href="#" className="text-white text-decoration-none d-inline-flex align-items-center px-2">Vender no site</a>
      <span className="text-white mx-1">|</span>
      <a href="#" className="text-white text-decoration-none d-inline-flex align-items-center px-2">Baixe o App</a>
      <span className="text-white mx-1">|</span>
      <a href="#" className="text-white text-decoration-none d-inline-flex align-items-center px-2">Siga-nos</a>
    </div>
    <div className="topbar-options d-flex align-items-center">
      <a href="#" className="text-white text-decoration-none d-inline-flex align-items-center px-2">
        <i className="bi bi-bell me-1"></i> Notificações
      </a>
      <span className="text-white mx-1">|</span>
      <a href="#" className="text-white text-decoration-none d-inline-flex align-items-center px-2">
        <i className="bi bi-question-circle me-1"></i> Ajuda
      </a>
      <span className="text-white mx-1">|</span>
      <Dropdown align="end">
        <Dropdown.Toggle variant="link" className="text-white text-decoration-none px-2">
          <i className="bi bi-globe me-1"></i> Português - BR
        </Dropdown.Toggle>
        <Dropdown.Menu className="border-0 shadow">
          <Dropdown.Item href="#">English</Dropdown.Item>
          <Dropdown.Item href="#">Português - BR</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <span className="text-white mx-1">|</span>
      <Link to="/cadastro" className="text-white text-decoration-none px-2">Cadastrar</Link>
      <span className="text-white mx-1">|</span>
      <Link to="/login" className="text-white text-decoration-none px-2">Entrar</Link>
    </div>
  </div>
);
