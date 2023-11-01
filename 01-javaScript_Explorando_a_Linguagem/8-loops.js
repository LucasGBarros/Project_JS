console.log("\nEstrutura de Repetição\n");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";

console.log(`Destinos possíveis: \n${listaDeDestinos}\n`);

const podeComprar = idadeComprador >=18 || estaAcompanhada == true;

let contador = 0;
while(contador < 3){
    if(listaDeDestinos[contador] == destino){
        console.log("Destino Existe");
    }
    else {
        console.log("Destino não Existe");
    }
    contador += 1; // contador = contador + 1 > Desta forma o contador está fazendo um loop dentro da própria lista e adicionando ele mesmo até a lista acabar.
}