import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <footer className="bg-light border-top pt-4 pb-3 mt-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h6>ATENDIMENTO AO CLIENTE</h6>
                        <ul className="list-unstyled">
                            <li><a href="#">Central de Ajuda</a></li>
                            <li><a href="#">Como Comprar</a></li>
                            <li><a href="#">Métodos de Pagamento</a></li>
                            <li><a href="#">Garantia Site</a></li>
                            <li><a href="#">Devolução e Reembolso</a></li>
                            <li><a href="#">Fale Conosco</a></li>
                            <li><a href="#">Ouvidoria</a></li>
                            <li><a href="#">Preferências de cookies</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h6>SOBRE A SITE</h6>
                        <ul className="list-unstyled">
                            <li><a href="#">Sobre Nós</a></li>
                            <li><a href="#">Políticas Site</a></li>
                            <li><a href="#">Política de Privacidade</a></li>
                            <li><a href="#">Programa de Afiliados da Site</a></li>
                            <li><a href="#">Seja um Entregador Site</a></li>
                            <li><a href="#">Ofertas Relâmpago</a></li>
                            <li><a href="#">Site Blog</a></li>
                            <li><a href="#">Imprensa</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h6>PAGAMENTO</h6>
                        <div className="d-flex flex-wrap">
                            <img src="/visa.png" alt="Visa" className="me-2" />
                            <img src="/mastercard.png" alt="Mastercard" className="me-2" />
                            <img src="/elo.png" alt="Elo" className="me-2" />
                            <img src="/hipercard.png" alt="Hipercard" className="me-2" />
                            <img src="/americanexpress.png" alt="Amex" className="me-2" />
                            <img src="/pix.png" alt="Pix" className="me-2" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h6>SIGA-NOS</h6>
                        <div>
                            <i className="bi bi-instagram me-2"></i>
                            <i className="bi bi-tiktok me-2"></i>
                            <i className="bi bi-twitter me-2"></i>
                            <i className="bi bi-facebook me-2"></i>
                            <i className="bi bi-linkedin"></i>
                        </div>
                        <h6 className="mt-3">BAIXAR APP SITE</h6>
                        <div className="d-flex">
                            <img src="/qrcode.png" alt="QR Code" className="me-2" />
                            <div>
                                <img src="/appstore.png" alt="App Store" className="d-block" />
                                <img src="/googleplay.png" alt="Google Play" className="d-block mt-2" />
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="text-center">
                    <p>&copy; 2025 Site. Todos os direitos reservados</p>
                    <p>País e região: Singapura | Indonésia | Tailândia | Malásia | Vietnã | Filipinas | Brasil | México | Colômbia | Chile | Taiwan</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
