const form = document.getElementById("form");
const nomeProdutoInput = document.getElementById("nomeProduto");
const descProdutoInput = document.getElementById("descProduto");
const valorProdutoInput = document.getElementById("valorProduto");
const disponivelParaVendaSelect = document.getElementById("disponivelParaVenda");
const tabelaProdutosBody = document.getElementById("corpoTabelaProdutos");
const novoProdutoButton = document.getElementById("novoProduto");

// Função para adicionar um produto à tabela
function adicionarProduto(nome, valor) {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${nome}</td><td>${valor}</td>`;
    tabelaProdutosBody.appendChild(newRow);
}

// Evento ao enviar o formulário
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = nomeProdutoInput.value;
    const valor = parseFloat(valorProdutoInput.value).toFixed(2);

    adicionarProduto(nome, valor);
    form.reset();
});

// Evento ao clicar no botão "Cadastrar Novo Produto"
novoProdutoButton.addEventListener("click", () => {
    document.getElementById("form").scrollIntoView();
});

// Ordenação por valor
function ordenarPorValor() {
    const rows = Array.from(tabelaProdutosBody.querySelectorAll("tr"));
    const sortedRows = rows.sort((a, b) => {
        const valorA = parseFloat(a.querySelector("td:nth-child(2)").textContent);
        const valorB = parseFloat(b.querySelector("td:nth-child(2)").textContent);
        return valorA - valorB;
    });

    tabelaProdutosBody.innerHTML = "";
    sortedRows.forEach(row => tabelaProdutosBody.appendChild(row));
}

// Chamar a função de ordenação ao carregar a página
ordenarPorValor();
