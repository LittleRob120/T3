/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import BarraNavegacao from './barraNavegacao';
import FormularioCadastroCliente from './formularioCadastroCliente';
import ListaCliente from './listaCliente';

export default function Roteador() {
    const [clientes, setClientes] = useState([]);
    const [tema] = useState('#e3f2fd');
    const botoes = ['Clientes'];
    const seletorView = () => {}; // Função vazia só para não dar erro

    const handleCadastrar = (novoCliente) => {
        setClientes([...clientes, novoCliente]);
    };

    return (
        <>
            <BarraNavegacao botoes={botoes} seletorView={seletorView} tema={tema} />
            <FormularioCadastroCliente onCadastrar={handleCadastrar} tema={tema} />
            <ListaCliente clientes={clientes} />
        </>
    );
}