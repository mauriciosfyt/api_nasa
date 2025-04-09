# 🌌 Projeto React - Consumo da API APOD da NASA

## 1. 📖 Descrição do Projeto

Este projeto consiste em uma aplicação web feita com **React** que consome a API [Astronomy Picture of the Day (APOD)](https://api.nasa.gov/) da NASA. A aplicação exibe uma imagem ou vídeo do espaço diariamente, acompanhada de título, data e descrição fornecidos por astrônomos da NASA.

---

## 2. 🛠️ Tecnologias Utilizadas

- **Linguagem**: JavaScript (ES6+)
- **Framework**: React
- **Gerenciador de pacotes**: npm 
- **Bibliotecas**:
  - [`axios`](https://www.npmjs.com/package/axios) – Para chamadas HTTP



## 3. 📁 Estrutura de Pastas

nasa-apod-react/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   └── ApodViewer.jsx         # Componente principal que exibe o conteúdo da API
│   │
│   ├── services/
│   │   └── nasaApi.js             # Função para fazer requisição à API da NASA
│   │
│   ├── App.js                     # Componente raiz da aplicação
│   ├── index.js                   # Ponto de entrada da aplicação React
│   └── .env                       # Variáveis de ambiente (API KEY)
│
├── .gitignore                    # Arquivos/pastas ignorados pelo Git
├── package.json                 # Dependências e scripts do projeto
└── README.md                    # Documentação do projeto


---

## 📋 Passo a Passo para Rodar o Projeto

### 1. Clone o repositório e encontre o arquivo

gh repo clone mauriciosfyt/api_nasa
cd nasa-apod-react

### 2. instale as dependências

npm install


### 3. Starta o serviço

npm start


