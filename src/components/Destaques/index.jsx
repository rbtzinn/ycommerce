import React from "react";
import './destaques.css'

const produtos = [
    { id: 1, nome: "Produto 1", descricao: "Sapato Nike branco", imagem: "/images/produto1.jpg" },
    { id: 2, nome: "Produto 2", descricao: "Descrição do produto 2", imagem: "/images/produto2.jpg" },
    { id: 3, nome: "Produto 3", descricao: "Descrição do produto 3", imagem: "/images/produto3.jpg" },
    { id: 4, nome: "Produto 4", descricao: "Descrição do produto 4", imagem: "/images/produto4.jpg" },
    { id: 5, nome: "Produto 5", descricao: "Descrição do produto 5", imagem: "/images/produto5.jpg" },
    { id: 6, nome: "Produto 6", descricao: "Descrição do produto 6", imagem: "/images/produto6.jpg" },
];

const Destaques = () => {
    return (
        <div className="container-dest bg-light rounded p-3">
            <h4 className="dest">Destaques</h4>
            <div className="row g-4">
                {produtos.map((produto) => (
                    <div key={produto.id} className="col-12 col-sm-6 col-md-3 mb-5 product">
                        <a
                            href="#"
                            className="comprar-btn"
                            data-nome={produto.nome}
                            data-descricao={produto.descricao}
                            data-imagem={produto.imagem}
                            data-bs-toggle="modal"
                            data-bs-target="#meuModal"
                        >
                            <div className="card w-100 product-card">
                                <img src={"https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="} className="card-img-top" alt={produto.nome} />
                                <div className="card-body">
                                    <h5 className="card-title">{produto.nome}</h5>
                                    <p className="card-text">{produto.descricao}</p>
                                    <button className="btn btn-primary btn-sm" style={{ marginRight: "1em", marginBottom: "1em"}}><i className="bi bi-currency-dollar"></i> Comprar agora</button>
                                    <button className="btn btn-primary btn-sm"><i className="bi bi-cart"></i> Adicionar ao carrinho</button>

                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
            <div className="modal fade" id="meuModal" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="modal-nome">Título do Produto</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="zoom-container">
                                <img id="modal-imagem" src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" alt="Imagem do Produto" className="img-fluid mb-3" />
                            </div>
                            <p id="modal-descricao">Descrição do Produto</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Fechar
                            </button>
                            <button type="button" className="btn btn-primary">Adicionar ao Carrinho</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destaques;
