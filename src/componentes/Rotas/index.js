import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadFormulacao from '../forms/CadFormulacao';
import CadFornecedor from '../forms/CadFornecedor';
import CadMateriaPrima from '../forms/CadMateriaPrima';
import CadProduto from '../forms/CadProduto';
import CadUsuario from '../forms/CadUsuario';
import PaginaInicial from '../PaginaInicial';

function Rotas() {
    return <BrowserRouter>
        <Switch>
            <Route exact path='/' component={PaginaInicial} />
            <Route path='/cad/formulacao' component={CadFormulacao} />
            <Route path='/cad/fornecedor' component={CadFornecedor} />
            <Route path='/cad/materiaprima' component={CadMateriaPrima} />
            <Route path='/cad/produto' component={CadProduto} />
            <Route path='/cad/usuario' component={CadUsuario} />
        </Switch>
    </BrowserRouter>
};

export default Rotas;