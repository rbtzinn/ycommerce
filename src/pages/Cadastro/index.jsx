import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import React from 'react';
import './cadastro.css';
import logo from '../../assets/images/ycommerce/YCommerce---letreiro.png'

const Cadastro = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
            <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-light">
                <div className="row g-0 shadow-lg rounded-3 overflow-hidden mt-4 mb-4" style={{ maxWidth: '1000px' }}>
                    <div className="col-md-6 bg-primary text-white p-5 d-flex flex-column justify-content-center">
                        <h2 className="fw-bold mb-3">yCommerce Site</h2>
                        <img src={logo} alt="LOGO" />
                        <p className="mt-3">Já tem uma conta?</p>
                        <button
                            onClick={() => navigate("/login")}
                            className="btn btn-outline-light mt-2"
                        >
                            Faça login
                        </button>
                    </div>

                    <div className="col-md-6 bg-white p-5 position-relative">
                        <button
                            onClick={() => navigate("/")}
                            className="position-absolute top-0 start-0 m-3 btn btn-link text-decoration-none"
                            aria-label="Voltar"
                        >
                            <i className="bi bi-arrow-left fs-4"></i>
                        </button>

                        <h2 className="text-center mb-4 fw-bold">Crie sua conta</h2>

                        <form>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control py-2"
                                    placeholder="Nome completo"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control py-2"
                                    placeholder="E-mail"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <input
                                    type="tel"
                                    className="form-control py-2"
                                    placeholder="Telefone"
                                />
                            </div>

                            <div className="mb-3 position-relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="form-control py-2 pe-5"
                                    placeholder="Senha"
                                    required
                                />
                                <button
                                    type="button"
                                    className="btn btn-link position-absolute end-0 top-50 translate-middle-y p-0 me-2"
                                    onClick={togglePasswordVisibility}
                                >
                                    <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"} text-secondary`}></i>
                                </button>
                            </div>

                            <div className="mb-3 position-relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    className="form-control py-2 pe-5"
                                    placeholder="Confirme sua senha"
                                    required
                                />
                                <button
                                    type="button"
                                    className="btn btn-link position-absolute end-0 top-50 translate-middle-y p-0 me-2"
                                    onClick={toggleConfirmPasswordVisibility}
                                >
                                    <i className={`bi ${showConfirmPassword ? "bi-eye-slash" : "bi-eye"} text-secondary`}></i>
                                </button>
                            </div>

                            <div className="mb-3 form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="termsCheck"
                                    required
                                />
                                <label className="form-check-label small" htmlFor="termsCheck">
                                    Eu concordo com os <a href="#" className="text-primary">Termos de Serviço</a> e <a href="#" className="text-primary">Política de Privacidade</a>
                                </label>
                            </div>

                            <button type="submit" className="btn btn-primary w-100 py-2 fw-bold mt-3">CADASTRAR</button>
                        </form>
                    </div>
                </div>
            </div>
    );
};

export default Cadastro;