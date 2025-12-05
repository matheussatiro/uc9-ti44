console.log("olá mundo");

var nome = "Matheus"
// estou fazendo uma concatenação
console.log( "Olá "+nome );

var idade = 25;
// estou fazendo uma interpolação
/*
"" - aspas
'' - apostrofe
`` - crase
*/
console.log(`Olá ${nome}, sua idade é ${idade}`);


/*
() - parenteses
[] - colchetes para vetor
{} - chaves para estruturas ou contexto
*/


//camalcase
var cestaCafe = []; //estou declarando um vetor
cestaCafe[0] = "café"; //uma atribuição
cestaCafe[1] = "ovo";


//undercase
var cesta_cafe = ["café", "ovo"];

cestaCafe.push("bacon");
cesta_cafe.push("pão");

console.log(cestaCafe);
console.log(cesta_cafe);


var identificacao = ["Matheus Satiro de Oliveira", "25", "991626526"];

console.log("nome: "+identificacao[0]);
console.log("idade: "+identificacao[1]);
console.log("telefone: "+identificacao[2]);

// estrutura, dicionario, classe anonima
var identificacao = {
    nome: "Matheus Satiro de Oliveira",
    idade: 25,
    telefone: "991626526"
}

var estoque = [];

estoque.push({
    codigo: "47",
    nome: "banana",
    valor: 2.99
});

estoque.push({
    codigo: "35",
    nome: "beterraba",
    valor: 5.45
});

var soma = estoque[0].valor + estoque[1].valor
console.log(estoque)
console.log("as somas dos produtos é "+ soma)




var notas = [];

notas.push({
    nome: "pedro",
    nota: 8
})

notas.push({
    nome: "kevin",
    nota: 4
})

notas.push({
    nome: "gabi",
    nota: 9
})

var media = notas[0].nota + notas[1].nota + notas[2].nota
media = media/3
console.log(notas)
console.log("a media das notas é "+ media)

