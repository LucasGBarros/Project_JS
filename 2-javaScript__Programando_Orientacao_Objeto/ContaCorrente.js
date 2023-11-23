import { Cliente } from "./Cliente.js";

export class contaCorrente{
    static numConta = 0;
    agencia;
    _cliente;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    _saldo = 0;

    get saldo(){
        return this._saldo
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        contaCorrente.numConta += 1;
    }

    atribuirCliente(){}
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0)
        {
            return;
        } 
        this._saldo += valor;           
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
        // conta.cidade = "São Paulo";
    }
}
// A classe é um modelo de estrutura para ser preenchido de acordo com as informações que voce quer
