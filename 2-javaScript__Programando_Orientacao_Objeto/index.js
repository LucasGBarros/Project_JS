import {Cliente} from "./Cliente.js"
import {contaCorrente} from "./ContaCorrente.js"

// Criando variavel com as informações da classe
const cliente1 = new Cliente("Lucas", 12345678901); 
const cliente2 = new Cliente("Alice", 77788899945);

// conforme a descrição de classe da função depositar só recebe valor>0, o valor negativo nao é executado

let numConta = 0;
const contaCorrenteLucas = new contaCorrente(1001, cliente1);

contaCorrenteLucas.depositar(500);
const conta2 = new contaCorrente(102, cliente2);

let valor = 200;
contaCorrenteLucas.transferir(valor,conta2);

console.log(contaCorrente.numConta);