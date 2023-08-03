
const msg = 'o rato roeu a roupa do rei de roma teste teste teste mais texto!';

const a = 0;

const b = 'testando:' + (a ?? 'nao informado')
const frase = msg.match(/t/g);


const luao = {
    nome: 'Fabio Davi Rauh',
    idade: 48,
    endereco: {
        rua: 'Rua Mariano de Souza',
        numero: '330',
        cep: '03411090',
    }
}

function restruturacao({ nome, idade }) {
    console.log(nome, idade)
}



const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array.forEach(item => {
    console.log(item)
})

const x = array
    .filter(item => {

        return item.toString().includes('1');
    })
    .map(item => {
        return `x: ${item}= ${item + 500}`
    })

console.log(x)

//const e = restruturacao(luao)

//console.log(Object.values - entries, keys) exemplo Object.entries(endereco)
//const { endereco, idade } = luao;
//console.log(JSON.stringify({ endereco, idade }))

