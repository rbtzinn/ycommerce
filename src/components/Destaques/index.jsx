import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import produtos from "../../data/produtos";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./destaques.css";

const Destaques = () => {
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [activeIndex, setActiveIndex] = useState(0);

    const handleVerDetalhes = (id) => {
        navigate(`/reviews/${id}`);
    };

    const getItemsPerSlide = () => {
        if (window.innerWidth < 576) return 2;
        if (window.innerWidth < 768) return 2;
        if (window.innerWidth < 992) return 3;
        if (window.innerWidth < 1200) return 4;
        return 5;
    };

    const itemsPerSlide = getItemsPerSlide();
    const slides = [];
    for (let i = 0; i < produtos.length; i += itemsPerSlide) {
        slides.push(produtos.slice(i, i + itemsPerSlide));
    }

    useEffect(() => {
        const carouselElement = document.getElementById("carouselDestaques");
        carouselElement.addEventListener("slid.bs.carousel", (event) => {
            setActiveIndex(event.to);
        });

        return () => {
            carouselElement.removeEventListener("slid.bs.carousel", () => { });
        };
    }, []);

    return (
        <div className="container my-4 bg-white rounded p-3">
            {/* Cabeçalho com título e indicadores alinhados */}
            <div className="d-flex align-items-center mb-3 justify-content-between">
                <h4 className="mb-0 me-3">Ofertas em Destaque</h4>
                <div className="d-flex align-items-center custom-indicators">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            data-bs-target="#carouselDestaques"
                            data-bs-slide-to={index}
                            className={`mx-1 ${index === activeIndex ? "active" : ""}`}
                            aria-current={index === activeIndex}
                            aria-label={`Slide ${index + 1}`}
                            style={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                border: "none",
                                backgroundColor: index === activeIndex ? "#0d6efd" : "#cccccc",
                                padding: "0",
                                transition: "background-color 0.3s ease"
                            }}
                        ></button>
                    ))}
                </div>
            </div>
            <div id="carouselDestaques" className="carousel slide produtos-carousel" data-bs-ride="false">
                <div className="carousel-inner">
                    {slides.map((slideProducts, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                            <div className="row g-3">
                                {slideProducts.map((produto) => (
                                    <div key={produto.id} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex">
                                        <div className="card product-card h-100" onClick={() => handleVerDetalhes(produto.id)}>
                                            <div className="image-container">
                                                <img src={produto.imagem} className="card-img-top img-fluid" alt={produto.nome} />
                                            </div>
                                            <div className="card-body d-flex flex-column">
                                                <h5 className="card-title">{produto.nome}</h5>
                                                <p className="card-text text-muted small">{produto.descricao}</p>
                                                <div className="mt-auto">
                                                    <p className="fw-bold text-success mb-1">R$ {produto.preco.toFixed(2)}</p>
                                                    {produto.desconto && (
                                                        <p className="text-danger small">{produto.desconto}% OFF</p>
                                                    )}
                                                    {produto.parcelamento && (
                                                        <p className="text-muted small">{produto.parcelamento}</p>
                                                    )}
                                                    <p className="text-muted small">{produto.nomeLoja}</p>
                                                    <button
                                                        className="btn btn-primary w-100 mt-2"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            addToCart(produto);
                                                        }}
                                                    >
                                                        <i className="bi bi-cart"></i> <p className="d-none d-lg-block">Adicionar</p>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselDestaques"
                    data-bs-slide="prev"
                    disabled={activeIndex === 0}
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselDestaques"
                    data-bs-slide="next"
                    disabled={activeIndex === slides.length - 1}
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Destaques;