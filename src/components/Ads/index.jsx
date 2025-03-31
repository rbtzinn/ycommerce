import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ads.css";

const categories = [
  { icon: "🔥", text: "ATÉ 60% OFF" },
  { icon: "🎟️", text: "CUPONS" },
  { icon: "💰", text: "OFERTAS COM PIX" },
  { icon: "⚡", text: "OFERTAS RELÂMPAGO" },
  { icon: "📦", text: "FRETE GRÁTIS" },
  { icon: "💣", text: "OFERTAS DO DIA" },
  { icon: "⚡", text: "ENVIOS RÁPIDOS" },
];

const Ads = () => {
  return (
    <Container fluid className="ads-container py-3">
      <Row className="g-2 g-md-3 justify-content-center">
        {categories.map((item, index) => (
          <Col xs={4} sm={3} md={2} lg={2} xl={1} key={index} className="px-1 px-md-2">
            <div className="ads-item text-center p-1">
              <div className="ads-circle mx-auto mb-2">
                <span className="ads-icon">{item.icon}</span>
              </div>
              <p className="ads-text mb-0 text-white">{item.text}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Ads;