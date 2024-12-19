🖥️ Backend - Atividade Final de Análise e Projeto de Sistemas (APS)

📋 Descrição

Este repositório contém a API para um sistema de gerenciamento de produtos de estoque. A API expõe endpoints para realizar operações CRUD (Criar, Ler, Atualizar e Deletar) sobre os seguintes dados de cada produto:

- **Nome**
- **Descrição**
- **Quantidade**
- **Foto**

A aplicação foi estruturada de acordo com a arquitetura orientada a serviços, utilizando práticas recomendadas para desenvolvimento de APIs RESTful.

---

🚀 Funcionalidades

- 📥 **Cadastrar um produto**: Cria um novo produto com os dados fornecidos.
- 📤 **Listar todos os produtos**: Retorna todos os produtos cadastrados no sistema.
- ✏️ **Editar um produto**: Permite atualizar os dados de um produto específico.
- 🗑️ **Deletar um produto**: Remove um produto do sistema.

---

⚙️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express.js**: Framework para criação de servidores HTTP.
- **Banco de Dados**: MongoDB .
- **ORM**: Mongoose (MongoDB) para facilitar a interação com o banco de dados.

---

🛠️ Como Rodar o Projeto

1. Clonar o Repositório

Clone o repositório para sua máquina local:

git clone https://github.com/mariagomeess/atividade-backend-aps.git

2. Instalar Dependências

Acesse o diretório do projeto e instale as dependências:

cd atividade-backend-aps
npm install

3. Configurar o Banco de Dados

Crie um banco de dados de sua escolha.

Configure a URL de conexão no arquivo .env:

env

DB_URI=<URL_DO_BANCO_DE_DADOS>
PORT=3000

4. Rodar o Servidor
Execute o servidor localmente:

node app.js

Agora, a API estará rodando em http://localhost:3000.

🔧 Endpoints

Método	Rota	Descrição

GET	/produtos	Retorna todos os produtos
POST	/produtos	Cria um novo produto
PUT	/produtos/:id	Atualiza um produto existente
DELETE	/produtos/:id	Deleta um produto

👤 Autor 

Maria Vitória Gomes de Lima

