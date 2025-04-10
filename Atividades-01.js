// Atividade 01
let nome = "Douglas";
let idade = 37;

//console.log("Olá, meu nome é " + nome + " eu tenho " + idade + " anos."); //Concatenação
console.log(`Olá, meu nome é ${nome}, tenho ${idade} anos.`) //Interpolação

//Atividade 02
let texto = "Olá, Mundo!";
let maiusculas = texto.toUpperCase();
let minusculas = texto.toLowerCase();

console.log("Tudo maiúsculo: " + maiusculas);
console.log("Tudo minúsculas: " + minusculas);

//console.log(texto.toLowerCase());
//console.log(texto.toUpperCase());

//Atividade 03
console.log(typeof idade);
console.log(typeof texto);
idade = "37";
texto = 37;
console.log(typeof idade);
console.log(typeof texto);

//Atividade 04
let altura = 1.80;
let peso = 97;
let imc = (peso / (altura * altura)).toFixed(2);

console.log("Seu IMC é: " + imc);