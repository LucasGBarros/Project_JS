console.log("\nBreak e Debugger\n");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log(`Destinos possíveis: \n${listaDeDestinos}\n`);
console.log(listaDeDestinos);

const podeComprar = idadeComprador >=18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while(contador < 3){
        if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador += 1; // contador = contador + 1 > Desta forma o contador está fazendo um loop dentro da própria lista e adicionando ele mesmo até a lista acabar.
}

console.log("Destino existe:", destinoExiste);