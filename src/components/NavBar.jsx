import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand mb-0 h1">
          <img
            src="./logo_new.png"
            alt="Productos importados"
            width="139"
            height="114"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/categories/electronica">
                Electrónica
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categories/joyeria">
                Joyería
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categories/ropa-mujer">
                Ropa de Mujer
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categories/ropa-hombre">
                Ropa de Hombre
              </Link>
            </li>
          </ul>

          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
