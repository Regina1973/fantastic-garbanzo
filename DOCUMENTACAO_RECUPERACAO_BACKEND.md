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
---

## Decisão sobre banco de dados

O projeto tentou usar MongoDB inicialmente, mas houve problemas de conexão e configuração.

Por isso, nesta fase inicial, o backend passou a usar uma estrutura SQL com Sequelize e SQLite.

Atualmente o backend usa:

- Node.js
- Express
- Sequelize
- SQLite
- sqlite3

O projeto não está usando MongoDB nesta fase.

O projeto também ainda não está usando MySQL diretamente. O banco atual é SQLite, que é um banco SQL simples e local, bom para desenvolvimento e testes.

## Por que usar SQLite agora

O SQLite foi escolhido porque:

- é mais simples para desenvolvimento local;
- não precisa de servidor de banco separado;
- funciona em arquivo local;
- reduz problemas de conexão;
- ajuda a fazer o backend funcionar primeiro;
- combina com a fase inicial do projeto.

## Possível migração futura

Quando o projeto estiver mais completo, com produtos, pedidos, login, painel administrativo e frontend funcionando, poderá ser feita uma migração para MySQL ou PostgreSQL.

Como o projeto usa Sequelize, essa troca futura fica mais organizada.

Para usar MySQL futuramente, será necessário instalar no backend o pacote mysql2 e ajustar o arquivo backend/database/db.js.

## Decisão atual

Nesta fase, a decisão é:

- manter Sequelize + SQLite;
- não voltar para MongoDB agora;
- não migrar para MySQL ainda;
- primeiro fazer o projeto funcionar.

