import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import './destaques.css';
import produtos from "../../data/produtos";  

const Destaques = () => {
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const handleVerDetalhes = (id) => {
        navigate(`/reviews/${id}`);
    };

    return (
        <div className="container-dest bg-light rounded p-3">
            <h4 className="dest">Destaques</h4>
            <div className="row g-4">
                {produtos.map((produto) => (
                    <div key={produto.id} className="col-12 col-sm-6 col-md-3 mb-5 product">
                        <div 
                            className="card w-100 product-card"
                            onClick={() => handleVerDetalhes(produto.id)}
                            style={{ cursor: "pointer" }}
                        >
                            <img 
                                src={produto.imagem} 
                                className="card-img-top" 
                                alt={produto.nome} 
                            />
                            <div className="card-body">
                                <h5 className="card-title">{produto.nome}</h5>
                                <p className="card-text">{produto.descricao}</p>
                                <p className="fw-bold text-success">R$ {produto.preco.toFixed(2)}</p>
                                <button 
                                    className="btn btn-primary btn-sm"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        addToCart(produto);
                                    }}
                                >
                                    <i className="bi bi-cart"></i> Adicionar ao carrinho
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Destaques;
