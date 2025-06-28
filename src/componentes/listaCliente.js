import React from 'react';

export default function ListaCliente({ clientes }) {
    return (
        <div className="container-fluid">
            <h2>Lista de Clientes</h2>
            <ul className="list-group">
                {clientes && clientes.length > 0 ? (
                    clientes.map((cliente, idx) => (
                        <li className="list-group-item" key={idx}>
                            <strong>{cliente.nome}</strong> ({cliente.nomeSocial}) - {cliente.email}
                        </li>
                    ))
                ) : (
                    <li className="list-group-item">Nenhum cliente cadastrado.</li>
                )}
            </ul>
        </div>
    );
}