import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import React, { useState, useRef } from "react";
import { IMaskInput } from "react-imask";

export const NavbarTopbar = () => {
  const [cep, setCep] = useState('');
  const cepRef = useRef(null);

  const handleCepChange = (value) => {
    setCep(value);
    // Lógica adicional quando o CEP mudar
  };

  return (
    <div className="container topbar-section d-none d-lg-flex justify-content-between py-1">
      <div className="topbar-links d-flex align-items-center">
        {/* Campo de CEP estilizado */}
        <div className="cep-container d-flex align-items-center me-3">
          <span className="text-white me-2 small align-self-center">CEP:</span>
          <div className="input-group input-group-sm align-items-center" style={{ width: '150px' }}>
            <IMaskInput
              mask="00000-000"
              inputRef={cepRef}
              value={cep}
              onAccept={(value) => handleCepChange(value)}
              placeholder="00000-000"
              className="form-control form-control-sm border-end-0"
              style={{
                borderTopRightRadius: '0',
                borderBottomRightRadius: '0',
                height: '24px'
              }}
              definitions={{
                '0': /[0-9]/
              }}
            />
            <button
              className="btn btn-sm btn-outline-light border-start-0 d-flex align-items-center justify-content-center"
              style={{
                height: '31px',
                width: '32px',
                padding: '0'
              }}
            >
              <i className="bi bi-geo-alt"></i>
            </button>
          </div>
        </div>

        {/* Restante do código permanece igual */}
        <Link to="/central-vendedor" className="text-white text-decoration-none d-inline-flex align-items-center px-2">
          Central do Vendedor
        </Link>
        <span className="text-white mx-1">|</span>
        <a href="#" className="text-white text-decoration-none d-inline-flex align-items-center px-2">Vender no site</a>
        <span className="text-white mx-1">|</span>

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

      {/* Restante do código permanece igual */}
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
};