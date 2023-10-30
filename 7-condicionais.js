console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);


const idadeComprador = 17;
const estaAcompanhada = true;

console.log("Destinos possíveis");
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
    console.log("Comprador Maior de Idade");
    // REMOVENDO ELEMENTOS
    listaDeDestinos.splice(1, 1);
}

else if (estaAcompanhada) {
    console.log("Comprador está acompanhado");
    listaDeDestinos.splice(1, 1);
}
else {
    console.log("Não é Maior de idade e nao posso vender");
}

// listaDeDestinos.splice(1,1); 
console.log(listaDeDestinos);

// console.log(idadeComprador >  18);
// console.log(idadeComprador >  18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >  18);
// console.log(idadeComprador == 18);