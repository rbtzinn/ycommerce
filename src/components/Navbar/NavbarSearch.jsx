import React from "react";

export const NavbarSearch = () => (
    <form className="search-bar d-flex flex-grow-1 mx-3" style={{ maxWidth: '600px' }}>
      <input
        className="form-control rounded-start"
        type="search"
        placeholder="Buscar no site"
        aria-label="Search"
      />
      <button className="btn btn-white rounded-end px-3" type="submit">
        <i className="bi bi-search text-white"></i>
      </button>
    </form>
  );