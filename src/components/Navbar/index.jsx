import './main.css';

const Navbar = () => {
  return (
    <>
      {/* Barra superior */}
      <div className="topbar">
        <div className="container d-flex justify-content-between">
          <div className="topbar-links">
            <a href="#">Central do Vendedor</a> | 
            <a href="#">Vender na Shopee</a> | 
            <a href="#">Baixe o App</a> | 
            <a href="#">Siga-nos</a>
          </div>
          <div className="topbar-options">
            <a href="#">Notificações</a> | 
            <a href="#">Ajuda</a> | 
            <a href="#">Português - BR</a> | 
            <a href="#">Cadastrar</a> | 
            <a href="#">Entrar</a>
          </div>
        </div>
      </div>

      {/* Navbar Principal */}
      <nav className="navbar navbar-expand-lg main-navbar">
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand text-white" href="#">
            <img src="logo.png" alt="LOGO" className="logo" />
          </a>

          {/* Barra de pesquisa centralizada */}
          <form className="search-bar">
            <input
              className="form-control"
              type="search"
              placeholder="Buscar no site"
              aria-label="Search"
            />
            <button className="search-btn" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>

          {/* Ícones à direita */}
          <div className="nav-icons">
            <a href="#"><i className="bi bi-cart3"></i></a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
