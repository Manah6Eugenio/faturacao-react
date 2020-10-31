import React from 'react';

function CadUsuario() {
    return (
        <div>
            <p className="title has-text-centered">
                Cadastro Usuário
            </p>
            <div className="field">
                <label className="label">Nome</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Nome" name="nome"></input>
                </div>
            </div>
            <div className="field">
                <label className="label">CPF/CNPJ</label>
                <div className="control">
                    <input className="input" type="text" placeholder="999.999.999-99" name="cpf"></input>
                </div>
            </div>
            <div className="field">
                <label className="label">E-Mail</label>
                <div className="control">
                    <input className="input" type="email" placeholder="exemplo@email.com" name="email"></input>
                </div>
            </div>
            <div className="field">
                <label className="label">Senha</label>
                <div className="control">
                    <input className="input" type="password" placeholder="" name="senha"></input>
                </div>
            </div>
        </div>
    )
}

export default CadUsuario;