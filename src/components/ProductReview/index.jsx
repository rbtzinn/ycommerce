import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import produtos from "../../data/produtos";
import { FaHeart, FaRegHeart, FaShoppingCart, FaBolt, FaStar, FaChevronLeft } from "react-icons/fa";
import { IMaskInput } from "react-imask";
import "./productReview.css";

const ProductReview = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    
    const produto = produtos.find((p) => p.id === Number(id));
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(produto?.imagens?.[0] || "");
    const [isFavorited, setIsFavorited] = useState(false);
    const [cep, setCep] = useState("");
    const [frete, setFrete] = useState(null);
    const [isCalculating, setIsCalculating] = useState(false);
    const [freteError, setFreteError] = useState("");

    if (!produto) {
        return <div className="product-not-found">Produto não encontrado!</div>;
    }

    const handleIncrease = () => setQuantity((prev) => prev + 1);
    const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

    const handleAddToCart = () => {
        addToCart({ ...produto, quantity });
    };

    const calcularFrete = async () => {
        if (cep.length !== 9) {
            setFreteError("CEP inválido");
            return;
        }

        setIsCalculating(true);
        setFreteError("");

        try {
            // Simulação de API de frete (substitua por uma chamada real)
            await new Promise((resolve) => setTimeout(resolve, 1500));

            // Valores simulados
            const valorFrete = (Math.random() * 20 + 5).toFixed(2);
            const prazo = Math.floor(Math.random() * 10) + 1;
            const tipo = ["Expresso", "Econômico", "Padrão"][Math.floor(Math.random() * 3)];

            setFrete({ valor: valorFrete, prazo, tipo });
        } catch {
            setFreteError("Erro ao calcular frete");
        } finally {
            setIsCalculating(false);
        }
    };

    return (
        <div className="product-review-container">
            <button onClick={() => navigate(-1)} className="back-button">
                <FaChevronLeft /> Voltar
            </button>

            <div className="product-detail-card">
                {/* Galeria de imagens */}
                <div className="product-gallery">
                    <div className="thumbnail-container">
                        {produto.imagens?.map((img, index) => (
                            <div
                                key={index}
                                className={`thumbnail ${selectedImage === img ? "active" : ""}`}
                                onClick={() => setSelectedImage(img)}
                            >
                                <img src={img} alt={`Thumb ${index}`} />
                            </div>
                        ))}
                    </div>
                    <div className="main-image">
                        <img src={selectedImage} alt={produto.nome} />
                    </div>
                </div>

                {/* Informações do produto */}
                <div className="product-info">
                    <h1>{produto.nome}</h1>
                    <div className="rating">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={i < produto.rating ? "filled" : ""} />
                        ))}
                        <span>({produto.reviews} avaliações)</span>
                    </div>

                    {produto.tag && <span className="product-tag">{produto.tag}</span>}

                    <div className="price-container">
                        <div className="current-price">
                            R$ {produto.preco.toFixed(2)}
                            {produto.desconto && <span className="discount-badge">-{produto.desconto}%</span>}
                        </div>
                        {produto.precoAntigo && <div className="old-price">R$ {produto.precoAntigo.toFixed(2)}</div>}
                        {produto.parcelamento && (
                            <div className="installments">
                                ou {produto.parcelamento.vezes}x de R$ {(
                                    produto.preco / (produto.parcelamento?.vezes ?? 1)
                                ).toFixed(2)} {produto.parcelamento.semJuros ? "sem juros" : ""}
                            </div>
                        )}
                    </div>

                    <h3>Descrição</h3>
                    <p>{produto.descricao}</p>

                    {/* Seção de quantidade */}
                    <div className="quantity-selector">
                        <label>Quantidade:</label>
                        <div className="quantity-control">
                            <button onClick={handleDecrease}>-</button>
                            <span>{quantity}</span>
                            <button onClick={handleIncrease}>+</button>
                        </div>
                    </div>

                    {/* Cálculo de Frete */}
                    <div className="shipping-section">
                        <h4>Calcular Frete</h4>
                        <div className="shipping-controls">
                            <IMaskInput
                                mask="00000-000"
                                value={cep}
                                onAccept={(value) => setCep(value)}
                                placeholder="00000-000"
                                className="cep-input"
                            />
                            <button onClick={calcularFrete} disabled={!cep || cep.length < 9} className="calculate-button btn btn-primary">
                                {isCalculating ? "Calculando..." : "Calcular"}
                            </button>
                        </div>

                        {freteError && <div className="shipping-error">{freteError}</div>}

                        {frete && (
                            <div className="shipping-result">
                                <p>Frete {frete.tipo}: R$ {frete.valor}</p>
                                <p>Prazo de entrega: {frete.prazo} dia{frete.prazo > 1 ? "s" : ""}</p>
                            </div>
                        )}
                    </div>

                    {/* Botões de ação */}
                    <div className="action-buttons">
                        <button className="btn btn-success" onClick={handleAddToCart}>
                            <FaShoppingCart /> Adicionar ao Carrinho
                        </button>
                        <button className="btn btn-primary">
                            <FaBolt /> Comprar Agora
                        </button>
                    </div>

                    {/* Favorito */}
                    <button className={`favorite-button ${isFavorited ? "favorited" : ""}`} onClick={() => setIsFavorited(!isFavorited)}>
                        {isFavorited ? <FaHeart /> : <FaRegHeart />}
                        {isFavorited ? "Remover dos favoritos" : "Adicionar aos favoritos"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductReview;
