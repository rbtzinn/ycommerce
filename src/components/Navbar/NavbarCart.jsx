import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";

export const NavbarCart = ({ cartItems, removeFromCart, calculateTotal, showCart, setShowCart }) => (
    <>
        {/* Ícone do Carrinho no Mobile - Apenas Link */}
        <Link to="/carrinho" className="text-decoration-none text-white d-block d-lg-none position-relative">
            <i className="bi bi-cart3 fs-4"></i>
            {cartItems.length > 0 && (
                <span className="cart-badge position-absolute badge rounded-pill bg-danger">
                    {cartItems.length}
                    <span className="visually-hidden">itens no carrinho</span>
                </span>
            )}
        </Link>

        {/* Dropdown do Carrinho no Desktop */}
        <Dropdown
            align="end"
            show={showCart}
            onMouseEnter={() => setShowCart(true)}
            onMouseLeave={() => setShowCart(false)}
            className="d-none d-lg-block"
        >
            <Dropdown.Toggle as="div" bsPrefix="toggle" className="position-relative p-0">
                {/* Link no PC para ir ao carrinho */}
                <Link to="/carrinho" className="text-decoration-none text-white">
                    <i className="bi bi-cart3 fs-4"></i>
                    {cartItems.length > 0 && (
                        <span className="cart-badge position-absolute badge rounded-pill bg-danger">
                            {cartItems.length}
                            <span className="visually-hidden">itens no carrinho</span>
                        </span>
                    )}
                </Link>
            </Dropdown.Toggle>

            {/* Dropdown Menu */}
            <Dropdown.Menu className="p-0 border-0 shadow" style={{ width: '350px' }}>
                <div className="bg-white">
                    <div className="p-3 border-bottom">
                        <h6 className="m-0">Meu Carrinho ({cartItems.length} {cartItems.length === 1 ? 'item' : 'itens'})</h6>
                    </div>

                    {cartItems.length > 0 ? (
                        <>
                            <div className="overflow-auto" style={{ maxHeight: '300px' }}>
                                {cartItems.map((item, index) => (
                                    <Dropdown.Item key={index} className="p-3 border-bottom">
                                        <div className="d-flex align-items-center">
                                            <img
                                                src={item.imagem}
                                                alt={item.nome}
                                                className="rounded me-3"
                                                style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                                            />
                                            <div className="flex-grow-1">
                                                <span className="d-block text-truncate">{item.nome}</span>
                                                <span className="d-block text-primary fw-bold">R$ {item.preco.toFixed(2)}</span>
                                                <span className="text-muted small">Quantidade: 1</span>
                                            </div>
                                            <button
                                                className="btn btn-sm btn-outline-danger ms-2"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    removeFromCart(index);
                                                }}
                                            >
                                                <i className="bi bi-trash"></i>
                                            </button>
                                        </div>
                                    </Dropdown.Item>
                                ))}
                            </div>
                            <div className="p-3 border-top bg-light">
                                <div className="d-flex justify-content-between mb-3">
                                    <span className="fw-bold">Total:</span>
                                    <span className="fw-bold text-primary">R$ {calculateTotal()}</span>
                                </div>
                                <Link
                                    to="/carrinho"
                                    className="btn btn-primary w-100 py-2 fw-bold"
                                >
                                    Finalizar Compra
                                </Link>
                            </div>
                        </>
                    ) : (
                        <div className="text-center p-4">
                            <i className="bi bi-cart-x fs-1 text-muted mb-2"></i>
                            <p className="mb-0">Seu carrinho está vazio</p>
                            <Link to="/" className="btn btn-outline-primary mt-3">
                                Continuar comprando
                            </Link>
                        </div>
                    )}
                </div>
            </Dropdown.Menu>
        </Dropdown>
    </>
);
