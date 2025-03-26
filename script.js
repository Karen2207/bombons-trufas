document.addEventListener("DOMContentLoaded", function() {
    mostrarProdutos(dados);
});

function mostrarProdutos(lista) {
    let container = document.getElementById("resultados-pesquisa");
    container.innerHTML = "";

    lista.forEach(produto => {
        let item = document.createElement("div");
        item.classList.add("item-resultado");

        item.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}" class="produto-imagem">
            <div class="info">
                <h2>${produto.nome}</h2>
                <p class="descricao-meta">${produto.descricao}</p>
                <a href="${produto.link}" target="_blank">Mais Informações</a>
            </div>
        `;
        container.appendChild(item);
    });
}

function pesquisar() {
    let termo = document.getElementById("campo-pesquisa").value.toLowerCase();
    let filtrados = dados.filter(produto => produto.nome.toLowerCase().includes(termo));
    mostrarProdutos(filtrados);
}
