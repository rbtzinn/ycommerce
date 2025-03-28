import { useState } from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { FaBars, FaUserCircle, FaBox, FaShippingFast, FaExchangeAlt, FaUndo, FaPlus } from "react-icons/fa";
import "./centralVendedor.css";
import React from "react";

export default function CentralVendedor() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="vendor-admin-container">
      {/* Sidebar Moderna */}
      <div 
        className=  {`vendor-sidebar d-none d-lg-block ${sidebarOpen ? "open" : "closed"}`}
      >
        <div className="sidebar-header p-4">
          <h4 className="text-white mb-0">Painel do Vendedor</h4>
        </div>
        
        <nav className="sidebar-menu">
          <h6 className="menu-section-title">PEDIDOS</h6>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a href="#" className="nav-link">
                <FaBox className="me-2" />
                Meus Pedidos
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <FaShippingFast className="me-2" />
                Envio em Massa
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <FaExchangeAlt className="me-2" />
                Centro de Transferência
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <FaUndo className="me-2" />
                Retornos/Cancelados
              </a>
            </li>
          </ul>

          <h6 className="menu-section-title mt-4">PRODUTOS</h6>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a href="#" className="nav-link">
                <FaBox className="me-2" />
                Meus Produtos
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                <FaPlus className="me-2" />
                Novo Produto
              </a>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Área Principal */}
      <div className="vendor-main-content">
        {/* Navbar Superior */}
        <Navbar bg="white" className="vendor-navbar shadow-sm">
          <div className="d-flex align-items-center">
            <FaBars 
              className="sidebar-toggle me-3 ms-3 d-flex d-lg-none" 
              onClick={() => setSidebarOpen(!sidebarOpen)} 
            />
            <Navbar.Brand className="vendor-brand ms-3">Central do Vendedor</Navbar.Brand>
          </div>
          <Nav className="ms-auto">
            <div className="user-profile me-3">
              <FaUserCircle size={28} />
              <span className="user-name ms-2 me-3 d-none d-lg-flex">Admin</span>
            </div>
          </Nav>
        </Navbar>

        {/* Conteúdo */}
        <Container fluid className="vendor-content-container py-4">
          <Row className="g-4">
            <Col xl={8}>
              <div className="vendor-card">
                <h5 className="card-title">Lista de Tarefas</h5>
                <div className="task-list">
                  {/* Itens da lista de tarefas */}
                </div>
              </div>
            </Col>
            <Col xl={4}>
              <div className="vendor-card">
                <h5 className="card-title">Avisos Importantes</h5>
                <div className="notifications">
                  {/* Notificações */}
                </div>
              </div>
              <div className="vendor-card mt-4">
                <h5 className="card-title">Estatísticas Rápidas</h5>
                {/* Widgets de estatísticas */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}