console.log(`Trabalhando com Listas`);

// let idade; // declarando variável
// idade = 26; // atribuindo valor

let idade;
idade = 26;
idade = idade+1;
console.log(idade);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
); // Criando nova lista

listaDeDestinos.push(`Curitiba`); // Adicionando um item na lista

console.log(`Destinos possíveis`);
// console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos)