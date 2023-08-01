
// Array para armazenar os livros (dados em memória)
let livros = [];

// Função para criar um novo livro
function criarLivro(titulo, autor) {
    const novoLivro = { titulo, autor };
    livros.push(novoLivro);
    return novoLivro;
}

// Função para ler todos os livros
function lerLivros() {
    return livros;
}

// Função para ler um livro específico pelo índice no array
function lerLivro(index) {
    return livros[index];
}

// Função para atualizar um livro pelo índice no array
function atualizarLivro(index, novoTitulo, novoAutor) {
    if (livros[index]) {
        livros[index].titulo = novoTitulo || livros[index].titulo;
        livros[index].autor = novoAutor || livros[index].autor;
        return livros[index];
    }
    return null;
}

// Função para deletar um livro pelo índice no array
function deletarLivro(index) {
    if (livros[index]) {
        const livroDeletado = livros.splice(index, 1);
        return livroDeletado[0];
    }
    return null;
}

// Exemplos de uso:
criarLivro('Aprendendo JavaScript33', 'John Doe');
criarLivro('Node.js para Iniciantes33', 'Jane Smith');
criarLivro('serpro estudos', 'fabio davi rauh');
console.log(lerLivros()); // Output: [ { titulo: 'Aprendendo JavaScript', autor: 'John Doe' }, { titulo: 'Node.js para Iniciantes', autor: 'Jane Smith' } ]

atualizarLivro(1, 'Serpro Aprovado.. parabens', 'fabio'); // Atualiza o título do primeiro livro
console.log(lerLivro(0)); // Output: { titulo: 'JavaScript Avançado', autor: 'John Doe' }

//deletarLivro(1); // Deleta o segundo livro do array
console.log(lerLivros()); // Output: [ { titulo: 'JavaScript Avançado', autor: 'John Doe' } ]


const resultado = lerLivros();
document.querySelector('#app').innerHTML = JSON.stringify(resultado);


