# Sistema WB - Interface Gráfica (Frontend)

Bem-vindo à documentação oficial do projeto de interface gráfica do Sistema WB. Este projeto foi desenvolvido para o Grupo World Beauty (WB) com o objetivo de modernizar e facilitar o uso do sistema por meio de uma interface web responsiva, intuitiva e acessível em qualquer dispositivo.

---

## 📋 Sumário

- [Visão Geral](#visão-geral)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Executar o Projeto](#como-executar-o-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Padrões de Desenvolvimento](#padrões-de-desenvolvimento)
- [Funcionalidades das Telas](#funcionalidades-das-telas)
- [Customização e Temas](#customização-e-temas)
- [Contribuição](#contribuição)
- [Contato](#contato)

---

## Visão Geral

O Sistema WB foi projetado para atender todas as franquias do Grupo World Beauty, proporcionando uma experiência moderna e eficiente para os usuários. A interface gráfica (GUI) foi construída com foco em usabilidade, responsividade e facilidade de navegação, garantindo que qualquer colaborador, independente do dispositivo, consiga operar o sistema sem dificuldades.

---

## Tecnologias Utilizadas

- React 17+ (componentes de função e hooks)
- JavaScript (ES6+)
- Bootstrap 5 (design responsivo)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) (testes unitários)

> **Observação:** O projeto utiliza Bootstrap para garantir responsividade e um design moderno.

---

## Como Executar o Projeto

**Pré-requisitos:**
- Node.js (versão 14 ou superior)
- npm ou yarn

**Instalação:**
```sh
npm install
# ou
yarn install
```

**Execução:**
```sh
npm start
# ou
yarn start
```

**Acesso:**  
Abra o navegador e acesse [http://localhost:3000](http://localhost:3000)

---

## Estrutura do Projeto

```
src/
  componentes/
    barraNavegacao.js
    formularioCadastroCliente.js
    listaCliente.js
    roteador.js
  App.js
  index.js
  index.css
public/
  index.html
  ...
```

- **componentes/**: Todos os componentes React de cada tela e funcionalidade.
- **App.js**: Componente principal da aplicação.
- **index.js**: Ponto de entrada da aplicação.
- **index.css**: Estilos globais e customização.

---

## Padrões de Desenvolvimento

- **Componentes de Função e Hooks:**  
  Todos os componentes React são implementados como funções utilizando hooks (`useState`, etc.), seguindo as práticas modernas do React.

- **Responsividade:**  
  Layout adaptável para desktop, tablets e celulares com Bootstrap.

- **Design Moderno:**  
  Uso de cores suaves e componentes visuais agradáveis.

- **Sem Backend:**  
  Este projeto é um pré-projeto de interface, sem integração com banco de dados ou APIs.

---

## Funcionalidades das Telas

- **Home:**  
  Tela inicial com navegação para Clientes.

- **Clientes:**  
  - Cadastro de cliente  
  - Listagem de clientes  
  - (Futuro: Atualizar e excluir clientes, listagens especiais)

---

## Customização e Temas

O tema principal utiliza tons claros (azul), podendo ser alterado no arquivo `index.css` e nos componentes.

---

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nome`)
3. Commit suas alterações (`git commit -am 'Adiciona nova feature'`)
4. Push para o branch (`git push origin feature/nome`)
5. Abra um Pull Request

---

Desenvolvido para o Grupo World Beauty (WB) - 2025  
Documentação criada para uso interno e treinamento de colaboradores.
