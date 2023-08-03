const livros = [
    { titulo: '100 anos de solidão', autor: 'Gabriel Garcia Marques' },
    { titulo: 'Ensaio sobre a cegueira', autor: 'José Saramago' }
]

function exibirLivros() {
    return livros;
}

function exibirLivro(index) {
    return livros[index] ? livros[index] : 'nao encontrado';
}

function incluiLivro(titulo, autor) {
    const livro = { titulo, autor }
    livros.push(livro);
}

function atualizaLivros(index, titulo, autor) {
    if (livros[index]) {
        livros[index].titulo = titulo || livros[index].titulo;
        livros[index].autor = autor || livros[index].autor;
        return livros[index];
    }
}


function dificilExcluir(index) {
    if (livros[index]) {
        const itemExcluido = livros.splice(index, 1);
        return itemExcluido[0];
    }
}

incluiLivro('Torto Arado', 'Itamar Vieira Junior');
atualizaLivros(2, 'Adeus, Aurora', ' Amie Kaufman e Jay Kristoff')
dificilExcluir(0);
console.log(exibirLivros());
console.log(exibirLivro(3));
document.querySelector('#p1').innerHTML = exibirLivros();