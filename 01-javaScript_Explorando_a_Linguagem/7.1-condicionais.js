console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);


const idadeComprador = 17;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possíveis");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) { // operadoração que refere "OU" é a sintaxe ||
    console.log("Boa Viagem!");
    listaDeDestinos.splice(2, 1);
}
else {
    console.log("Não é Maior de idade e nao posso vender");
}

console.log("Embarque: \n")

if (idadeComprador >= 18 && temPassagemComprada) { // operador && == E 
    console.log("Boa Viagem!")
}
else {
    console.log("Você não pode embarcar!")
} 