
export { bank, exibirTUDO }

let transacoes = [];

let person = {
    nome: 'fabio davi rauh',
    idade: 48,
    cc: '43948394.9'
}

let operation = {
    sacar: function (saldo, valor) {
        if ((saldo - valor) < 0) {
            return 'saldo insuficiente'
        }
        else {
            const transactValue = saldo -= valor;
            transacoes.push(`(-) debito: ${valor} - saldo:${transactValue}`)
            return transactValue;
        }

    },
    depositar: function (saldo, valor) {
        const transactValueDeposito = saldo += valor;
        transacoes.push(`(+) crédito ${valor} - saldo:${transactValueDeposito}`)
        return transactValueDeposito;
    },
    listaTransacoes: function (ordenar) {
        return transacoes;
    }
}

let bank = {

    person: person,
    operation: operation,
    transacao: transacoes

}


async function testEvery() {
    const arraysll = [1, 2, 3, 's'];

    let saida = arraysll.every((elemento, index, obj) => {
        return (typeof elemento === 'number');
    });
    return saida;
}

async function testFilter() {
    const arraysll = [1, 2, 3];

    let saida = arraysll.filter((elemento, index, obj) => {
        return (elemento > 1);
    });

    return saida;
}


async function forEachData() {

    const arr = [1, 2, 3, 'quatro', 'cinco'];
    const saida = arr.forEach((elem, i, obj) => {
        return `${i}-${elem}`;
    })
    return saida;
    //nao funciona retornar nada.. é só pra executar
}


function filterData() {
    const arr = [1, 'apple', 'banana', 'orange', 'pineapple', 'watermelon', 1];

    const itensComAnd = arr.filter((item) => {
        if (typeof item !== 'number') return item.includes('an');
    });

    return itensComAnd;
}


//testFilter().then(result => {
// console.log(result);
//});



async function exibirTMP() {
    const api2 = ['1', '2', '4', 5, 'fabio davi rauh'];

    const api = [
        { nome: 'fabio davi rauh', idade: 48, profissao: 'programador' },
        { nome: 'Ana Lucia B', idade: 53, profissao: 'admin' },
    ];

    const saida = api.map((item, indice) => {
        return `${indice}  -  (${item?.nome})   - `
    }).join('');

    console.log(saida);

}



async function exibir4() {
    const api = ['1', '2', '4', 5, 'fabio davi rauh'];
    let itens = '';
    for (let i = 0; i < api.length; i++) {
        itens += api[i];
        console.log(api[i]);
    }
    console.log(itens); // Resultado final concatenado
    document.querySelector('#app').innerHTML = itens;
}



/*

async function exibir2() {
  const api = await buscaApi();
  const itens = api.map((item, i) => `<p>${i} - item:${item.title}</p>`).join('');
  console.log(itens);
  document.querySelector('#app').innerHTML = itens;
}*/

async function buscaApi() {
    return (await fetch('https://jsonplaceholder.typicode.com/photos')).json();
}

async function buscaApi2() {
    const apiResult = await fetch('https://jsonplaceholder.typicode.com/photos');
    const apir = apiResult.json();
    return apir;
}

async function exibirTUDO() {
    const api = await buscaApi2()

    const itens = api.map((item, i) => {
        return `<p>${i} - item:${item.title}</p>`
    }).join('<br/><br/><br/><br/><br/><br/><br/>');


    return itens;

}



async function exibir() {
    const api = await buscaApi2()
    console.log(api)

}

//testFilter().then(result => {
// console.log(result);
//});


exibirTUDO().then(resultado => {
    console.log(resultado);
})





