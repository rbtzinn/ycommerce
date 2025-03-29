import React from "react";
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
    <div className="ads-container">
      {categories.map((item, index) => (
        <div key={index} className="ads-item">
          <div className="ads-circle">
            <span className="ads-icon">{item.icon}</span>
          </div>
          <p className="ads-text">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Ads;