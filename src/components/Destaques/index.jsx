import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext"; // Importa o contexto do carrinho
import './destaques.css';

const produtos = [
    { id: 1, nome: "Produto 1", descricao: "Sapato Nike branco", imagem: "/images/produto1.jpg" },
    { id: 2, nome: "Produto 2", descricao: "Descrição do produto 2", imagem: "/images/produto2.jpg" },
    { id: 3, nome: "Produto 3", descricao: "Descrição do produto 3", imagem: "/images/produto3.jpg" },
    { id: 4, nome: "Produto 4", descricao: "Descrição do produto 4", imagem: "/images/produto4.jpg" },
    { id: 5, nome: "Produto 5", descricao: "Descrição do produto 5", imagem: "/images/produto5.jpg" },
    { id: 6, nome: "Produto 6", descricao: "Descrição do produto 6", imagem: "/images/produto6.jpg" },
];

const Destaques = () => {
    const navigate = useNavigate();
    const { addToCart } = useCart(); // Obtém a função de adicionar ao carrinho

    const handleComprarAgora = (id) => {
        navigate(`/reviews/${id}`);
    };

    return (
        <div className="container-dest bg-light rounded p-3">
            <h4 className="dest">Destaques</h4>
            <div className="row g-4">
                {produtos.map((produto) => (
                    <div key={produto.id} className="col-12 col-sm-6 col-md-3 mb-5 product">
                        <div className="card w-100 product-card">
                            <img 
                                src={"https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="} 
                                className="card-img-top" 
                                alt={produto.nome} 
                            />
                            <div className="card-body">
                                <h5 className="card-title">{produto.nome}</h5>
                                <p className="card-text">{produto.descricao}</p>
                                <button 
                                    className="btn btn-primary btn-sm" 
                                    style={{ marginRight: "1em", marginBottom: "1em"}} 
                                    onClick={() => handleComprarAgora(produto.id)}
                                >
                                    <i className="bi bi-currency-dollar"></i> Comprar agora
                                </button>
                                <button 
                                    className="btn btn-primary btn-sm"
                                    onClick={() => addToCart(produto)}
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
