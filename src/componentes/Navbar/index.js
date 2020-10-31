import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item">
                        <img src={process.env.PUBLIC_URL + '/img/logo.png'} width="112" height="28"></img>
                    </a>
                </div>
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item">Home</a>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">Menu</a>
                            <div className="navbar-dropdown">
                                <BrowserRouter>
                                    <Link className="navbar-item" to="/cad/formulacao">Formulação</Link>
                                    <Link className="navbar-item" to="/cad/fornecedor">Fornecedor</Link>
                                    <Link className="navbar-item" to="/cad/materiprima">Mat. Prima</Link>
                                    <Link className="navbar-item" to="/cad/produto">Produto</Link>
                                    <Link className="navbar-item" to='/cad/usuario'>Usuário</Link>
                                </BrowserRouter>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary">
                                    <strong>Sign up</strong>
                                </a>
                                <a className="button is-light">Log in</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;