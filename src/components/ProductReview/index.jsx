import React, { useState } from "react";
import './ProductReview.css';
import { useCart } from "../../context/CartContext";

const ProductReview = () => {
    const [quantity, setQuantity] = useState(1);
    const [isFavorited, setIsFavorited] = useState(false);
    const { addToCart } = useCart(); // Pegando a função do contexto corretamente

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    };

    return (
        <div className="container d-flex gap-4 p-4 bg-white rounded shadow-sm" style={{ maxWidth: '900px' }}>
            <div className="w-100 d-flex align-items-center justify-content-center">
                <img
                    src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
                    alt="Produto"
                    className=" img-fluid rounded w-100 h-auto"
                    style={{ objectFit: 'contain' }}
                />
            </div>
            <div className="flex-grow-1">
                <h2 className="h5 fw-bold">Playstation 4 - Video game Ps4 1TB</h2>
                <p className="text-muted mb-2">
                    Playstation 4 com 1 ou 2 controles + jogo aleatório. Original - Semi novo.
                </p>
                <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="text-warning">⭐ 4.8</span>
                    <span className="text-muted small">(580 Avaliações)</span>
                    <span className="text-muted small">| 975 Vendidos</span>
                </div>
                <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="text-muted text-decoration-line-through">R$2.399,00</span>
                    <span className="h5 fw-bold text-danger">R$1.799,00</span>
                    <span className="badge bg-danger">25% OFF</span>
                </div>
                <p className="text-dark mb-3">12x de R$149,92</p>
                <div className="mb-3">
                    <p className="mb-1">Frete para <strong>Paulista, Pernambuco</strong></p>
                    <span className="text-success fw-bold">De R$45,75 por R$25,75</span>
                    <p className="text-muted small">Até R$20,00 de desconto no frete com cupom</p>
                </div>
                <p className="text-muted mb-3">📌 Seguros disponíveis</p>
                <div className="mb-3">
                    <p className="mb-1">Controle:</p>
                    <button className="btn btn-outline-secondary btn-sm me-2">COM UM CONTROLE</button>
                    <button className="btn btn-outline-secondary btn-sm">COM DOIS CONTROLES</button>
                </div>
                <div className="d-flex align-items-center gap-2 mb-3">
                    <p className="mb-0">Quantidade:</p>
                    <button className="btn btn-outline-primary btn-sm" onClick={handleDecrease}>-</button>
                    <span className="fw-bold">{quantity}</span>
                    <button className="btn btn-outline-primary btn-sm" onClick={handleIncrease}>+</button>
                    <span className="text-muted small">1837 peças disponíveis</span>
                </div>
                <div className="d-flex gap-2 mb-3">
                    <button className="btn btn-primary flex-grow-1" onClick={addToCart}>
                        🛒 Adicionar ao Carrinho
                    </button>
                    <button className="btn btn-success flex-grow-1">🛍️ Comprar Agora</button>
                </div>
                <button
                    className={`btn btn-link p-0 text-decoration-none ${isFavorited ? "text-danger" : "text-dark"}`}
                    onClick={toggleFavorite}
                >
                    ❤️ {isFavorited ? "Favoritado" : "Favoritar"} (25,8 mil)
                </button>
            </div>
        </div>
    );
};

export default ProductReview;
