import React, { useState } from "react";
import { Container, Row, Col, Card, ListGroup, Form, Button } from "react-bootstrap";
import "./myAcount.css"; 

const MinhaConta = () => {
  const [activeSection, setActiveSection] = useState("perfil");
  const [username] = useState("robertogabriel434");
  const [name, setName] = useState("Roberto");
  const [email] = useState("ro***********@hotmail.com");
  const [phone] = useState("********69");

  const renderSection = () => {
    switch (activeSection) {
      case "perfil":
        return (
          <div className="account-section">
            <h3 className="section-title">Meu Perfil</h3>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nome de usuário</Form.Label>
                <Form.Control type="text" value={username} readOnly className="form-input" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control 
                  type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  className="form-input"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} readOnly className="form-input" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Número de telefone</Form.Label>
                <Form.Control type="text" value={phone} readOnly className="form-input" />
              </Form.Group>
              <Button variant="primary" className="save-btn">Salvar Alterações</Button>
            </Form>
          </div>
        );

      case "cartoes":
        return (
          <div className="account-section">
            <h3 className="section-title">Meus Cartões</h3>
            <Card className="mb-3 card-item">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="card-text mb-1">Cartão Visa - Final 1234</p>
                    <small className="text-muted">Válido até 12/25</small>
                  </div>
                  <Button variant="outline-danger" size="sm" className="remove-btn">Remover</Button>
                </div>
              </Card.Body>
            </Card>
            <Button variant="primary" className="add-btn">
              <i className="bi bi-plus-lg me-2"></i> Adicionar Novo Cartão
            </Button>
          </div>
        );

      case "enderecos":
        return (
          <div className="account-section">
            <h3 className="section-title">Meus Endereços</h3>
            <Card className="mb-3 card-item">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="card-text mb-1">Rua Exemplo, 123</p>
                    <p className="card-text mb-1">São Paulo, SP - 01234-567</p>
                    <small className="text-muted">Endereço principal</small>
                  </div>
                  <Button variant="outline-danger" size="sm" className="remove-btn">Remover</Button>
                </div>
              </Card.Body>
            </Card>
            <Button variant="primary" className="add-btn">
              <i className="bi bi-plus-lg me-2"></i> Adicionar Novo Endereço
            </Button>
          </div>
        );

      default:
        return (
          <div className="account-section">
            <h3 className="section-title">Minha Conta</h3>
            <p>Selecione uma opção do menu para gerenciar suas configurações.</p>
          </div>
        );
    }
  };

  return (
    <Container className="my-5">
      <Row>
        {/* Sidebar */}
        <Col md={3} className="mb-4 mb-md-0">
          <Card className="sidebar-card">
            <Card.Body>
              <h5 className="sidebar-title">Minha Conta</h5>
              <ListGroup variant="flush" className="sidebar-menu">
                <ListGroup.Item 
                  action 
                  active={activeSection === "perfil"} 
                  onClick={() => setActiveSection("perfil")}
                  className="menu-item"
                >
                  <i className="bi bi-person me-2"></i> Perfil
                </ListGroup.Item>
                <ListGroup.Item 
                  action 
                  active={activeSection === "cartoes"} 
                  onClick={() => setActiveSection("cartoes")}
                  className="menu-item"
                >
                  <i className="bi bi-credit-card me-2"></i> Cartões
                </ListGroup.Item>
                <ListGroup.Item 
                  action 
                  active={activeSection === "enderecos"} 
                  onClick={() => setActiveSection("enderecos")}
                  className="menu-item"
                >
                  <i className="bi bi-house-door me-2"></i> Endereços
                </ListGroup.Item>
                <ListGroup.Item 
                  action 
                  onClick={() => setActiveSection("trocarSenha")}
                  className="menu-item"
                >
                  <i className="bi bi-shield-lock me-2"></i> Trocar Senha
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        {/* Conteúdo da seção ativa */}
        <Col md={9}>
          <Card className="content-card">
            <Card.Body>
              {renderSection()}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MinhaConta;