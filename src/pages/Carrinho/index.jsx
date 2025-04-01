import React, { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Carrinho = () => {
    const { cartItems, removeFromCart, addToCart } = useCart();
    const [selecionados, setSelecionados] = useState({});

    // Inicializa todos os produtos como selecionados
    useEffect(() => {
        const inicialSelecionados = {};
        cartItems.forEach(item => {
            inicialSelecionados[item.id] = true;
        });
        setSelecionados(inicialSelecionados);
    }, [cartItems]);

    const handleCheckboxChange = (id) => {
        setSelecionados((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    // Função para remover item do carrinho
    const handleRemoveItem = (id) => {
        removeFromCart(id); // Remove do carrinho (contexto)
        
        // Remove também do estado de selecionados
        setSelecionados(prev => {
            const newSelecionados = { ...prev };
            delete newSelecionados[id];
            return newSelecionados;
        });
    };

    // Função para alterar a quantidade de um produto
    const handleQuantityChange = (id, action) => {
        const produto = cartItems.find((item) => item.id === id);
        const novaQuantidade = action === "incrementar" ? (produto.quantidade + 1) : (produto.quantidade > 1 ? produto.quantidade - 1 : 1);
        addToCart({ ...produto, quantidade: novaQuantidade }); // Atualiza o produto no carrinho
    };

    const total = cartItems
        .filter((produto) => selecionados[produto.id])
        .reduce((acc, produto) => acc + (produto.preco * (produto.quantidade || 1)), 0);

    return (
        <div className="container my-5">
            <div className="card shadow">
                <div className="card-header bg-primary text-white">
                    <h4 className="mb-0">
                        <i className="bi bi-cart-fill me-2"></i>
                        Meu Carrinho
                    </h4>
                </div>
                
                <div className="card-body">
                    {cartItems.length === 0 ? (
                        <div className="text-center py-4">
                            <i className="bi bi-cart-x text-muted" style={{ fontSize: "3rem" }}></i>
                            <p className="mt-3 text-muted">Seu carrinho está vazio</p>
                        </div>
                    ) : (
                        <>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th width="5%">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        checked={cartItems.length > 0 && Object.values(selecionados).every(Boolean)}
                                                        onChange={() => {
                                                            const todosSelecionados = Object.values(selecionados).every(Boolean);
                                                            const novoEstado = {};
                                                            cartItems.forEach(item => {
                                                                novoEstado[item.id] = !todosSelecionados;
                                                            });
                                                            setSelecionados(novoEstado);
                                                        }}
                                                    />
                                                </div>
                                            </th>
                                            <th width="10%">Imagem</th>
                                            <th>Produto</th>
                                            <th width="15%">Preço</th>
                                            <th width="15%">Quantidade</th>
                                            <th width="15%">Subtotal</th>
                                            <th width="10%">Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map((produto) => {
                                            const quantidade = produto.quantidade || 1;
                                            const subtotal = produto.preco * quantidade;
                                            
                                            return (
                                                <tr key={produto.id}>
                                                    <td>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                checked={!!selecionados[produto.id]}
                                                                onChange={() => handleCheckboxChange(produto.id)}
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <img 
                                                            src={produto.imagem} 
                                                            alt={produto.nome} 
                                                            className="img-thumbnail" 
                                                            style={{ width: "60px", height: "60px", objectFit: "cover" }}
                                                        />
                                                    </td>
                                                    <td className="align-middle">
                                                        <h6 className="mb-0">{produto.nome}</h6>
                                                    </td>
                                                    <td className="align-middle">
                                                        R$ {produto.preco.toFixed(2)}
                                                    </td>
                                                    <td className="align-middle">
                                                        <div className="d-flex align-items-center">
                                                            <button 
                                                                className="btn btn-outline-secondary btn-sm"
                                                                onClick={() => handleQuantityChange(produto.id, "decrementar")}
                                                            >
                                                                -
                                                            </button>
                                                            <span className="mx-2">{quantidade}</span>
                                                            <button 
                                                                className="btn btn-outline-secondary btn-sm"
                                                                onClick={() => handleQuantityChange(produto.id, "incrementar")}
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle fw-bold">
                                                        R$ {subtotal.toFixed(2)}
                                                    </td>
                                                    <td className="align-middle">
                                                        <button 
                                                            className="btn btn-outline-danger btn-sm"
                                                            onClick={() => handleRemoveItem(produto.id)}
                                                        >
                                                            <i className="bi bi-trash"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>

                            <div className="row mt-4">
                                <div className="col-md-6">
                                <Link to="/">
                                    <button className="btn btn-outline-primary">
                                        Continuar Comprando
                                    </button>
                                </Link>
                                </div>
                                <div className="col-md-6 text-end">
                                    <div className="card bg-light">
                                        <div className="card-body">
                                            <h5 className="card-title">Resumo do Pedido</h5>
                                            <div className="d-flex justify-content-between mb-2">
                                                <span>Itens selecionados:</span>
                                                <span>
                                                    {Object.values(selecionados).filter(Boolean).length} / {cartItems.length}
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-between fw-bold fs-4">
                                                <span>Total:</span>
                                                <span className="text-primary">
                                                    R$ {total.toFixed(2)}
                                                </span>
                                            </div>
                                            <button 
                                                className="btn btn-primary w-100 mt-3"
                                                disabled={total === 0}
                                            >
                                                Finalizar Compra
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Carrinho;
