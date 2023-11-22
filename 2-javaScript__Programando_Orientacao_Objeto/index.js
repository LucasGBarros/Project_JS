class Cliente{
nome;
cpf;
}
class contaCorrente{
    agencia;
    _saldo;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0){
            return;
        }
        this._saldo += valor;
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Lucas";
cliente1.cpf = 12345678901;

const cliente2 = new Cliente();
cliente2.nome = "Alice"
cliente2.cpf = 77788899945;
// contaCorrenteLucas.depositar(-1); // conforme a descrição de classe da função depositar só recebe valor>0, o valor negativo nao é executado

const contaCorrenteLucas = new contaCorrente();
contaCorrenteLucas.agencia = 1001;

contaCorrenteLucas.depositar(100);
contaCorrenteLucas.depositar(100);
contaCorrenteLucas.depositar(100);

const valorSacado = contaCorrenteLucas.sacar(50);

console.log(valorSacado);
console.log(contaCorrenteLucas);