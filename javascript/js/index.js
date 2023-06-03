/**
 * @description Uma função que reccebe como parametro  numeros e realiza sua soma,
 * @param {number} nota1
 * @param {number} nota2
 * @returns {number}
 * Ainda tem referencias de chamada de outras funçoes, caso necessario
 */
const funcao = (nota1,nota2)=> nota1+nota2
console.log(funcao(4,7))


var stringona = "meu nome é ".concat("Amaral");
let primeiraString = ["vazia"];
let segundaString= ["vazia"];
let args= ["vazia"];

//ignore a desestruturação por enquanto
[primeiraString,segundaString, ...args] = stringona.split(" ");
console.log(primeiraString);
console.log(segundaString);
console.log(args);
console.log(stringona.split(" "));