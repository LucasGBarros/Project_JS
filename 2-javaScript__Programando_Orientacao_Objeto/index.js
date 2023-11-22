import {Cliente} from "./Cliente.js"
import {contaCorrente} from "./ContaCorrente.js"

// Criando variavel com as informações da classe
const cliente1 = new Cliente(); 

cliente1.nome = "Lucas";
cliente1.cpf = 12345678901;

const cliente2 = new Cliente();
cliente2.nome = "Alice"
cliente2.cpf = 77788899945;
// contaCorrenteLucas.depositar(-1); 
// conforme a descrição de classe da função depositar só recebe valor>0, o valor negativo nao é executado

const contaCorrenteLucas = new contaCorrente();
contaCorrenteLucas.agencia = 1001;
contaCorrenteLucas.cliente = cliente1;
contaCorrenteLucas.depositar(500);

const conta2 = new contaCorrente();
conta2.cliente= cliente2;
conta2.agencia= 102;
console.log(contaCorrenteLucas);
console.log(conta2);


let valor = 200;
contaCorrenteLucas.transferir(valor, conta2)

console.log("Valor: ", valor)

console.log(contaCorrenteLucas);
console.log(conta2);