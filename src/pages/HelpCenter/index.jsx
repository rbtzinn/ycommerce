import React from "react";
import { useNavigate } from "react-router-dom";
import {
    FaSearch,
    FaStore,
    FaTruck,
    FaMoneyBillWave,
    FaGift,
    FaUndo,
    FaInfoCircle,
    FaUserTie,
    FaArrowLeft
} from "react-icons/fa";
import {
    Container,
    Row,
    Col,
    InputGroup,
    FormControl,
    Button
} from "react-bootstrap";
import "./helpCenter.css";
import logo from '../../assets/images/ycommerce/YCommerce---letreiro.png'

const HelpCenter = () => {
    const navigate = useNavigate();
    
    const categories = [
        { icon: <FaStore />, title: "Compre com a Loja", description: "Saiba como comprar", color: "#FF6F61" },
        { icon: <FaTruck />, title: "Pedidos e Envio", description: "Acompanhe seu pedido", color: "#40A9FF" },
        { icon: <FaMoneyBillWave />, title: "Serviços Financeiros", description: "Métodos de pagamento", color: "#FFAB40" },
        { icon: <FaGift />, title: "Ofertas e Prêmios", description: "Promoções e recompensas", color: "#F48FB1" },
        { icon: <FaUndo />, title: "Devolução e Reembolso", description: "Como devolver um item", color: "#FF7043" },
        { icon: <FaInfoCircle />, title: "Informações Gerais", description: "Dúvidas frequentes", color: "#64B5F6" },
        { icon: <FaUserTie />, title: "Vendedores e Parceiros", description: "Ajuda para lojistas", color: "#FFD54F" }
    ];

    return (
        <div className="bg-light">
            {/* Banner de pesquisa com botão de voltar integrado */}
            <div className="bg-primary text-white py-5 text-center position-relative">
                {/* Botão de voltar posicionado dentro do banner */}
                <Button 
                    variant="link" 
                    className="text-white position-absolute top-0 start-0 p-4 mt-4 ms-4 arrow" 
                    onClick={() => navigate('/')}
                    aria-label="Voltar"
                > 
                    <FaArrowLeft size={24} />
                </Button>
                
                <Container>
                    <img src={logo} className="image-logo-help" alt="Logo" />
                    <h1 className="mb-4">Oi, como podemos ajudar?</h1>
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <InputGroup className="mb-3 shadow">
                                <FormControl
                                    placeholder="Procurar..."
                                    aria-label="Procurar ajuda"
                                />
                                <Button variant="light" className="text-primary">
                                    <FaSearch />
                                </Button>
                            </InputGroup>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Categorias de ajuda */}
            <Container className="py-5">
                <h2 className="text-center mb-5">Categorias</h2>
                <Row className="g-4">
                    {categories.map((cat, index) => (
                        <Col key={index} xs={12} sm={6} md={4} lg={3}>
                            <div
                                className="card h-100 border-2 shadow-sm text-center p-4 hover-scale"
                                style={{ borderColor: cat.color }}
                            >
                                <div
                                    className="fs-2 mb-3"
                                    style={{ color: cat.color }}
                                >
                                    {cat.icon}
                                </div>
                                <h3 className="h5">{cat.title}</h3>
                                <p className="text-muted">{cat.description}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default HelpCenter;