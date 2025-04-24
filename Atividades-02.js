//1. Crie um programa que declare duas variáveis e exiba o resultado da soma,
//subtração, multiplicação e divisão desses números.
let variavel_01 = 20;
let variavel_02 = 10;
console.log(`${variavel_01} + ${variavel_02} = ${variavel_01 + variavel_02}`);
console.log(`${variavel_01} - ${variavel_02} = ${variavel_01 - variavel_02}`);
console.log(`${variavel_01} * ${variavel_02} = ${variavel_01 * variavel_02}`);
console.log(`${variavel_01} / ${variavel_02} = ${variavel_01 / variavel_02}`);



//2. Declare duas idades e utilize operadores de comparação para verificar se uma
//pessoa é mais velha que a outra.
let pessoa1= 15
let pessoa2= 18
let comparar = pessoa1 > pessoa2 ? "pessoa 1 é mais velha" : " pessoa 2 é mais velha"
console.log("Pessoa 1: "+pessoa1+"\nPessoa 2:"+pessoa2+"\n"+comparar)

//3. Crie uma variável idade com um número e use o operador ternário para verificar
//se o valor armazenado na variável é maior ou igual a 18. Imprima “Maior de
//idade” ou “Menor de idade”.

let idade = 27;
let result = idade < 18 ? "menor de idade" : "maior de idade";
console.log(`Essa pessoa tem ${idade} anos, portanto é ${result}.`);


//4. Crie uma variável com um número e use o operador ternário para verificar se é
//par ou ímpar.

let numero = 35;
let resultado = numero % 2 === 0 ? "par" : 'impar';
console.log(`o numero: ${numero} é ${resultado}`);

