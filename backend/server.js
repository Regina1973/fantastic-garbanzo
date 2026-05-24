const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Lanchonete Sabor & Cia funcionando");
});

app.get("/api/produtos", (req, res) => {
  res.json([
    {
      id: 1,
      nome: "X-Burger",
      preco: 18
    },
    {
      id: 2,
      nome: "Batata Frita",
      preco: 12
    }
  ]);
});

app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000");
});