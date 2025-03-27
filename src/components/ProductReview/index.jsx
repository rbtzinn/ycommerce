import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import './ProductReview.css';
import produtos from "../../data/produtos";
import { useNavigate } from "react-router-dom";

const ProductReview = () => {
    const { id } = useParams();
    const produto = produtos.find(p => p.id === Number(id));
    const [quantity, setQuantity] = useState(1);
    const [isFavorited, setIsFavorited] = useState(false);
    const { addToCart } = useCart();
    const navigate = useNavigate();

    if (!produto) {
        return <p className="text-center mt-5">Produto não encontrado!</p>;
    }

    const handleIncrease = () => setQuantity(quantity + 1);
    const handleDecrease = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    return (
        <div className="container d-block d-lg-flex gap-4 p-4 bg-white rounded shadow-sm position-relative" style={{ maxWidth: '900px' }}>
            <button
                onClick={() => navigate('/')}
                className="btn position-absolute top-0 end-0 mt-2 me-2"
            >
                <i className="bi bi-x-lg fs-4"></i>
            </button>
            <div className="w-100 d-flex align-items-center justify-content-center">
                <img src={produto.imagem} alt={produto.nome} className=" img-fluid rounded w-100 h-auto" style={{ objectFit: 'contain' }} />
            </div>
            <div className="flex-grow-1">
                <h2 className="h5 fw-bold">{produto.nome}</h2>
                <p className="text-muted mb-2">{produto.descricao}</p>
                <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="h5 fw-bold text-danger">R$ {produto.preco.toFixed(2)}</span>
                </div>
                <div className="d-flex align-items-center gap-2 mb-3">
                    <p className="mb-0">Quantidade:</p>
                    <button className="btn btn-outline-primary btn-sm" style={{ borderColor: '#6c757d' }} onClick={handleDecrease}>-</button>
                    <span className="fw-bold">{quantity}</span>
                    <button className="btn btn-outline-primary btn-sm" style={{ borderColor: '#6c757d' }} onClick={handleIncrease}>+</button>
                </div>
                <div className="d-flex gap-2 mb-3">
                    <button className="btn btn-primary flex-grow-1" style={{ backgroundColor: '#6c757d', borderColor: '#6c757d' }} onClick={() => addToCart({ ...produto, quantity })}>
                        🛒 Adicionar ao Carrinho
                    </button>
                    <button className="btn btn-success flex-grow-1" style={{ backgroundColor: '#0d6efd', borderColor: '#0d6efd' }}>🛍️ Comprar Agora</button>
                </div>
                <button className={`btn btn-link p-0 text-decoration-none ${isFavorited ? "text-danger" : "text-dark"}`} onClick={() => setIsFavorited(!isFavorited)}>
                    ❤️ {isFavorited ? "Favoritado" : "Favoritar"}
                </button>
            </div>
        </div>
    );
};

export default ProductReview;
