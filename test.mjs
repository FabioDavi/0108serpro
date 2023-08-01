import assert from 'assert';
import { bank } from './api.mjs'

function soma(a, b) {
    return a + b;
}


const saldo = bank.operation.sacar(38, 35);
console.log('saldo ' + saldo);
assert.equal(soma(2, 2), 5);

//assert.equal(bank.operation.sacar(38, 35), 3);

console.log(bank.transacao);