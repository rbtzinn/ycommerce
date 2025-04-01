import React from "react";
import { Container } from "react-bootstrap";
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
      <div className="ads-scroll-container">
        {categories.map((item, index) => (
          <div key={index} className="ads-item text-center">
            <div className="ads-circle mx-auto mb-2">
              <span className="ads-icon">{item.icon}</span>
            </div>
            <p className="ads-text mb-0">{item.text}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Ads;
