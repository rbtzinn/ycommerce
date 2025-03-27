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
        <>
        <h4>Destaques</h4>
        <div className="container-dest bg-light rounded p-1 p-lg-3">
            <div className="row g-1">
                {produtos.map((produto) => (
                    <div key={produto.id} className="col-6 col-sm-4 col-md-3 col-lg-2 mb-5 product">
                        <div
                            className="card w-100 product-card h-100"
                            onClick={() => handleVerDetalhes(produto.id)}
                            style={{ cursor: "pointer" }}
                            >
                            <div className="image-container position-relative" style={{ paddingTop: '100%' }}>
                                <img
                                    src={produto.imagem}
                                    className="card-img-top img-fluid position-absolute top-0 start-0"
                                    alt={produto.nome}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        objectPosition: 'center'
                                    }}
                                    />
                            </div>
                            <div className="card-body d-flex flex-column">
                                <div className="flex-grow-1">
                                    <h5 className="card-title fs-6 mb-1">{produto.nome}</h5>
                                    <p className="card-text small text-muted mb-2" style={{
                                        display: "-webkit-box",
                                        WebkitLineClamp: "3",
                                        WebkitBoxOrient: "vertical",
                                        overflow: "hidden"
                                    }}>
                                        {produto.descricao}
                                    </p>
                                </div>
                                <div className="mt-auto">
                                    <p className="fw-bold text-success mb-2">R$ {produto.preco.toFixed(2)}</p>
                                    <button
                                        className="btn btn-primary btn-sm w-100"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            addToCart(produto);
                                        }}
                                        >
                                        <i className="bi bi-cart"></i>
                                        <span className="d-none d-md-inline ms-1">Adicionar</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
    );
};

export default Destaques;
