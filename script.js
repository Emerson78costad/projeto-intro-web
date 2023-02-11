// Semana 1  lista de filmes da marvel 
// 1. Para o item que você decidiu, pense nas características que são importantes para construí-lo. Vamos usar estas características para definir exemplos destes objetos usando o código.

// Você precisará criar pelo menos:

//   * uma característica String;
//   * uma característica Number;
//   * uma característica Boolean;

// 2. Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes
// Iron Man"
const titulo1 = "Iron Man"
const sinopse1 = "É um filme estadunidense de super-herói de 2008 baseado no personagem homônimo da Marvel Comics";  // historia  do filme
const duracao1 = 126;  // tempo em minutos 
const ano1 = 2008; // anos de lançamento do filme
const genero1 = "Ação, Aventura, Ficção Científica";
const remake1 = true; // boolean

// Thor: Love and Thunder

const titulo2 = "Thor: Love and Thunder"
const sinopse2 = " é um filme estadunidense de super-herói de 2022 baseado no personagem Thor, da Marvel Comics";  // historia  do filme
const duracao2 = 119;  // tempo em minutos 
const ano2 = 2022; // anos de lançamento do filme
const genero2 = "Ação,Fantasia,Aventura,Comédia,Ficção Científica";
const remake2 = false; // boolean

// The Incredible Hulk

const titulo3 = "The Incredible Hulk"
const sinopse3 = "um filme americano de super-herói de 2008 baseado no personagem Hulk da Marvel Comics, produzido pela Marvel Studios ";  // historia  do filme
const duracao3 = 126;  // tempo em minutos 
const ano3 = 2008; // anos de lançamento do filme
const genero3 = "Ação, Aventura, Ficção Científica";
const remake3 = true; // boolean

// Captain America : The First Avenger

const titulo4 = "Captain America : The First Avenger"
const sinopse4 = "É um filme de super-herói estadunidense de 2011, baseado no personagem Capitão América, da Marvel Comics.";  // historia  do filme
const duracao4 = 126;  // tempo em minutos 
const ano4 = 2011; // anos de lançamento do filme
const genero4 = "Ação, Aventura, Ficção científica";
const remake4 = true; // boolean

// Avengers: Endgame

const titulo5 = "Avengers: Endgame"
const sinopse5 = "Filme de super-herói americano de 2019, baseado na equipe Vingadores da Marvel Comics";  // historia  do filme
const duracao5 = 181;  // tempo em minutos 
const ano5 = 2019; // anos de lançamento do filme
const genero5 = "Aventura,Fantasia,Fantasia Científica";
const remake5 = false; // boolean

console.log("---------------Semana 1-----------------------------")
// A média deve ser igual à soma dos itens, dividida pelo total de itens.
const remaketotal = remake1 && remake2 && remake3 && remake4 && remake5
const mediaDuracao = (duracao1 + duracao2 + duracao3 + duracao4 + duracao5) / 5
console.log("A media de duração dos filmes, " +mediaDuracao +" minutos")

// Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.

console.log("Verifica os valores lógicos se são ou não são um remake ? "+remaketotal)

// Semana 2
// 1. Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.
console.log("---------------Semana 2-----------------------------")

console.log("Exibir um relatório usando console.log mostrando cada um dos itens criados ate aqui ")
console.log("----Homem de Ferro-----")
console.log(`Nome: ${titulo1.toUpperCase()}   \n\ `,
`Sinopse: ${sinopse1.toUpperCase()}`,
`Duração: ${duracao1.toString().toUpperCase()} Minutos  \n\ `, 
`Lançamento: ${ano1.toString().toUpperCase()}  \n\ `,
`Genero :${genero1.toUpperCase()}  \n\ `,
`É Remake ? ${remake1}   \n\ `)

console.log("----Thor Amor e Trovão-----")
console.log(`Nome:${titulo2.toUpperCase()} \n\ `,
`Sinopse: ${sinopse2.toUpperCase()} \n\ `,
`Duração: ${duracao2.toString().toUpperCase()} Minutos   \n\ `,
`Lançamentos: ${ano2.toString().toUpperCase()} \n\ `,
`Genero :${genero2.toUpperCase()} \n\ `,
`É Remake ? ${remake2} \n\ `);

console.log("----O Incrível Hulk-----")
console.log(`Nome:${titulo3.toUpperCase()}  \n`,
`Sinopse: ${sinopse3.toUpperCase()} \n\ `,
`Duração: ${duracao3.toString().toUpperCase()} Minutos   \n`,
`Lançamentos: ${ano3.toString().toUpperCase()} \n`,
`Genero :${genero3.toUpperCase()} \n `,
`É Remake ? ${remake3} \n`)

console.log("----Capitão America Pirmeiro Vingador----")
console.log(`Nome:${titulo4.toUpperCase()} \n`,
`Sinopse: ${sinopse4.toUpperCase()} \n`,
`Duração: ${duracao4.toString().toUpperCase()} Minutos   \n`,
`Lançamentos: ${ano4.toString().toUpperCase()} \n`,
`Genero :${genero3.toUpperCase()} \n`,
`É Remake ? ${remake4} \n`);

console.log("----Vingadores Ultimato-----")
console.log(`Nome:${titulo5.toUpperCase()} \n `,
`Sinopse: ${sinopse5.toUpperCase()} \n`,
`Duração: ${duracao5.toString().toUpperCase()} Minutos \n`,
`Lançamentos: ${ano5.toString().toUpperCase()} \n`,
`Genero :${genero5.toUpperCase()} \n`,
`É Remake ? ${remake5} \n`);

//  Semana 3 
// 1. Transforme os itens que criamos nas últimas semanas em objetos.
const homemdeferro = {
    nome:titulo1,
    tempo:duracao1,
    historia:sinopse1,
    lancou:ano1,
    tipo:genero1,
    original:remake1,
    img:"./img/Iron_Man.jpg"

}
console.log(homemdeferro);

const thor = {
    nome:titulo2,
    historia:sinopse2,
    tempo:duracao2,
    lancou:ano2,
    tipo:genero2,
    original:remake2,
    img:"./img/Thor.jpg"

}
console.log(thor)

const hulk = {
    nome:titulo3,
    historia:sinopse3,
    tempo:duracao3,
    lancou:ano3,
    tipo:genero3,
    original:remake3,
    img:"./img/Hulk.jpg"

}


console.log(hulk)

const capitao = {
    nome:titulo4,
    historia:sinopse4,
    tempo:duracao4,
    lancou:ano4,
    tipo:genero4,
    original:remake4,
    img:"./img/CapitaoAmerica.jpg"

}
console.log(capitao)

let vingadores = {
    nome:titulo5,
    historia:sinopse5,
    tempo:duracao5,
    lancou:ano5,
    tipo:genero5,
    original:remake5,
    img:"./img/Avengers.jpg"

}
// Semana 4
// Adicione os novos objetos no array de objetos, utilizando o push()
const filmesMarvel=[]

if (homemdeferro.original === true){
    filmesMarvel.push(homemdeferro)
}else{
    alert("O item não foi adicionado")
}

if(thor.original === true){
    filmesMarvel.push(thor)
}else{
    console.log("O item nao foi adiconado")
}

if(hulk.original === true){
    filmesMarvel.push(hulk)
}else{
    alert("O item nao foi adiconado")
}

if(capitao.original === true){
    filmesMarvel.push(capitao)
}else{
    alert("O item nao foi adiconado")
}

if(vingadores.original === true){
    filmesMarvel.push(vingadores)
}else{
    alert("O item nao foi adiconado")
}

console.log(filmesMarvel)

