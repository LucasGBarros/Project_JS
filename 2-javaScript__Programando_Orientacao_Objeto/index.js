class Cliente{
nome;
cpf;
agencia;
saldo;
rg;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();


cliente1.nome = "Lucas";
cliente1.cpf = 12345678901;
cliente1.agencia = 1001;
cliente1.saldo = 0;
cliente1.rg = 123456789;

cliente2.nome = "Alice"
cliente2.cpf = 77788899945;
cliente2.agencia = 1001;
cliente2.saldo = 0;

console.log(cliente1, cliente2)

