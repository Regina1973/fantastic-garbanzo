const listaCarrinho = document.getElementById("listaCarrinho");
const totalElemento = document.getElementById("total");
const btnLimparCarrinho = document.getElementById("btnLimparCarrinho");
const btnFinalizarPedido = document.getElementById("btnFinalizarPedido");

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function converterPreco(preco) {
    if (typeof preco === "number") {
        return preco;
    }

    const valor = String(preco)
        .replace("R$", "")
        .replace(/\./g, "")
        .replace(",", ".")
        .trim();

    return Number(valor) || 0;
}

function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function salvarCarrinho() {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function carregarCarrinho() {
    listaCarrinho.innerHTML = "";

    if (carrinho.length === 0) {
        listaCarrinho.innerHTML = "<p>Carrinho vazio.</p>";
        totalElemento.textContent = "Total: R$ 0,00";
        return;
    }

    let total = 0;

    carrinho.forEach((produto, index) => {
        const quantidade = Number(produto.quantidade) || 1;
        const preco = converterPreco(produto.preco);
        const subtotal = preco * quantidade;

        total += subtotal;

        listaCarrinho.innerHTML += `
            <div class="item-carrinho">
                <div>
                    <h3>${produto.nome}</h3>
                    <p>Preço: ${formatarMoeda(preco)}</p>
                    <p>Quantidade: ${quantidade}</p>
                    <strong>Subtotal: ${formatarMoeda(subtotal)}</strong>
                </div>

                <div class="acoes-item">
                    <button type="button" onclick="diminuirQuantidade(${index})">-</button>
                    <button type="button" onclick="aumentarQuantidade(${index})">+</button>
                    <button type="button" onclick="removerProduto(${index})">Remover</button>
                </div>
            </div>
        `;
    });

    totalElemento.textContent = `Total: ${formatarMoeda(total)}`;
}

function aumentarQuantidade(index) {
    carrinho[index].quantidade = (Number(carrinho[index].quantidade) || 1) + 1;
    salvarCarrinho();
    carregarCarrinho();
}

function diminuirQuantidade(index) {
    const quantidadeAtual = Number(carrinho[index].quantidade) || 1;

    if (quantidadeAtual <= 1) {
        removerProduto(index);
        return;
    }

    carrinho[index].quantidade = quantidadeAtual - 1;
    salvarCarrinho();
    carregarCarrinho();
}

function removerProduto(index) {
    carrinho.splice(index, 1);
    salvarCarrinho();
    carregarCarrinho();
}

btnLimparCarrinho.addEventListener("click", () => {
    localStorage.removeItem("carrinho");
    carrinho = [];
    carregarCarrinho();
});

btnFinalizarPedido.addEventListener("click", () => {
    if (carrinho.length === 0) {
        alert("Carrinho vazio.");
        return;
    }

    window.location.href = "checkout.html";
});

carregarCarrinho();
