let alunos = [];

function insereAluno(nome, idade, grau) {
    const aluno = {
        nomeAluno: nome,
        idadeAluno: idade,
        grauAluno: grau
    }
    alunos.push(aluno);
    return aluno;
}

function buscaAlunos() {
    return alunos;
}

function buscaAluno(i) {
    if (alunos[i]) {
        return alunos[i];
    }

}

function excluiAluno(indice) {
    if (alunos[indice]) {
        const alunoExcluido = alunos.splice(indice, 1)
        return alunoExcluido[0];
    }
}

function updateAluno(indice, nome, idade, grau) {
    if (alunos[indice]) {
        alunos[indice].nomeAluno = nome || alunos[indice].nomeAluno;
        alunos[indice].idadeAluno = idade || alunos[indice].idadeAluno;
        alunos[indice].grauAluno = grau || alunos[indice].grauAluno;
        return alunos[indice];
    }
}

insereAluno('fabio', 49, 'inteligente');
insereAluno('Anacleto', 94, 'burro');
insereAluno('Ana', 54, 'inteligente');

updateAluno(0, 'Fabio Davi Rauh', 55, 'genio');

console.log(buscaAlunos());

