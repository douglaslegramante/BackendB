let valor = 13.141516;
let text = "Meu primeiro projeto em JavaScript";
let ativo = true;

console.log(valor.toFixed(2)); //Arredonda o valor para duas casas decimais
console.log("Tipo:" + typeof valor); //Retorna o tipo da variável
console.log(text.toUpperCase()); //Converte o texto para maiúsculas
console.log("Tipo:" + typeof text); //Retorna o tipo da variável
console.log(ativo.toString()); //Converte para texto
console.log("Tipo:" + typeof ativo); //Retorna o tipo da variável

let estados = ["São Paulo", "Minas Gerais", "Rondônia", "Acre"];
let marcasCarros = [];
marcasCarros.push("Toyota");
console.log(estados[2]);
console.log("Tamanho: " + estados.length); //Concatenação
console.log(marcasCarros[0]);
console.log("Total letras: "+ marcasCarros[0].length);
console.log(`Estado: ${estados[1]}`); //Interpolação

let usuario; //variável não definida
console.log(usuario);
//console.log(usuario.length); //TypeError: Cannot read properties of undefined

let idade;
console.log(idade +1); // NaN - Not a number

let nula = null;
//console.log(nula.length);
console.log(nula + 1);

const aula = "JavaScript"; //Definindo uma constante
console.log(aula);