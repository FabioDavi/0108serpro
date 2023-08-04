const estoque = [];

function adicionarProduto(nome, preco, quantidade) {
    estoque.push({ nome, preco, quantidade });
}

function listarProdutos() {
    console.log("Produtos em estoque:");
    estoque.forEach((produto, index) => {
        console.log(`${index + 1}. ${produto.nome} - R$ ${produto.preco} - Quantidade: ${produto.quantidade}`);
    });
}

function calcularValorTotalEmEstoque() {
    let valorTotal = 0;
    estoque.forEach(produto => {
        valorTotal += produto.preco * produto.quantidade;
    });
    return valorTotal;
}

/*
function calcularValorTotalEmEstoque() {
    const valorTotal = estoque.reduce((acumulador, produto) => {
        return acumulador + produto.preco * produto.quantidade;
    }, 0);
    return valorTotal;
}

*/

// Adicionar alguns produtos ao estoque
adicionarProduto("Camiseta", 39.99, 50);
adicionarProduto("Calça Jeans", 89.90, 30);
adicionarProduto("Tênis", 129.99, 20);

// Listar os produtos no estoque
listarProdutos();

// Calcular o valor total em estoque
const valorTotalEmEstoque = calcularValorTotalEmEstoque();
console.log(`Valor total em estoque: R$ ${valorTotalEmEstoque}`);
