require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const produtosRoutes = require("./backend/routes/produtos");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "frontend")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend/pages/index.html"));
});

app.use("/produtos", produtosRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor rodando");
});
