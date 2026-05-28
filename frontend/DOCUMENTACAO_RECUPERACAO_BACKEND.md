# Documentação da Recuperação do Backend

Projeto: Lanchonete Sabor & Cia

## O que aconteceu

O backend quebrou porque o Codex começou uma estrutura mais avançada usando:

- routes/produtos.js
- controllers/produtoController.js
- models/Produto.js
- database/db.js
- Sequelize
- SQLite

O arquivo server.js também estava com conflito do Git.

## Dependências recuperadas

Foram instaladas no backend:

npm install express cors dotenv
npm install mongoose
npm install sequelize
npm install sqlite3

## Estado atual

O backend voltou a rodar com:

node server.js

Mensagem esperada:

Servidor rodando em http://localhost:3000

## Rotas para testar

http://localhost:3000
http://localhost:3000/produtos

## Atenção

Não rodar sem revisar:

git reset --hard
git clean -fd
rm -rf
npm audit fix --force