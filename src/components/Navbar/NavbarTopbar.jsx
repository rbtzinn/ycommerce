import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6"; // Atualizando ícones corretamente
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
      
      {/* Seção "Siga-nos" com ícones de redes sociais */}
      <span className="text-white d-inline-flex align-items-center px-2">
        Siga-nos:
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white ms-2">
          <FaInstagram />
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white ms-2">
          <FaTiktok />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white ms-2">
          <FaXTwitter />
        </a>
      </span>
    </div>

    <div className="topbar-options d-flex align-items-center">
      <a href="#" className="text-white text-decoration-none d-inline-flex align-items-center px-2">
        <i className="bi bi-bell me-1"></i> Notificações
      </a>
      <span className="text-white mx-1">|</span>
      <Link to="/ajuda" className="text-white text-decoration-none d-inline-flex align-items-center px-2">
        <i className="bi bi-question-circle me-1"></i> Ajuda
      </Link>
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
