import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './login.css';
import React from 'react';
import logo from '../../assets/images/ycommerce/YCommerce---letreiro.png'

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-light">
            <div className="row g-0 shadow-lg rounded-3 overflow-hidden mt-4 mb-4" style={{ maxWidth: '1000px' }}>
                <div className="col-md-6 bg-primary text-white p-5 d-flex flex-column justify-content-center">
                    <h2 className="fw-bold mb-3">yCommerce Site</h2>
                    <img src={logo} alt="LOGO" />
                </div>

                <div className="col-md-6 bg-white p-5 position-relative">
                    <button
                        onClick={() => navigate("/")}
                        className="position-absolute top-0 start-0 m-3 btn btn-link text-decoration-none"
                        aria-label="Voltar"
                    >
                        <i className="bi bi-arrow-left fs-4"></i>
                    </button>

                    <h2 className="text-center mb-4 fw-bold">Entre</h2>

                    <form>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control py-2"
                                placeholder="Telefone/Usuário/Email"
                            />
                        </div>

                        <div className="mb-3 position-relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="form-control py-2 pe-5"
                                placeholder="Senha"
                            />
                            <button
                                type="button"
                                className="btn btn-link position-absolute end-0 top-50 translate-middle-y p-0 me-2"
                                onClick={togglePasswordVisibility}
                            >
                                <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"} text-secondary`}></i>
                            </button>
                        </div>

                        <button type="submit" className="btn btn-primary w-100 py-2 fw-bold mt-3">ENTRE</button>
                    </form>

                    <div className="d-flex justify-content-center my-3">
                        <a href="#" className="text-decoration-none text-primary small me-2">Esqueci minha senha</a>
                        <span className="text-muted mx-2">|</span>
                        <a href="#" className="text-decoration-none text-primary small ms-2">Login com SMS</a>
                    </div>

                    <div className="d-flex align-items-center my-3">
                        <hr className="flex-grow-1" />
                        <span className="px-3 text-muted">ou</span>
                        <hr className="flex-grow-1" />
                    </div>

                    <div className="d-grid gap-2">
                        <button className="btn btn-outline-secondary d-flex align-items-center justify-content-center gap-2">
                            <i className="bi bi-facebook"></i> Facebook
                        </button>
                        <button className="btn btn-outline-secondary d-flex align-items-center justify-content-center gap-2">
                            <i className="bi bi-google"></i> Google
                        </button>
                        <button className="btn btn-outline-secondary d-flex align-items-center justify-content-center gap-2">
                            <i className="bi bi-apple"></i> Apple
                        </button>
                    </div>

                    <p className="text-center mt-3 mb-0">
                        Novo no site?
                        <Link to="/cadastro" className="text-decoration-none text-primary fw-medium ms-1">
                            Cadastrar
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;