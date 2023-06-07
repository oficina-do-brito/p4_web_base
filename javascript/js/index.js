/**
 * @description Uma função que reccebe como parametro  numeros e realiza sua soma,
 * @param {number} nota1
 * @param {number} nota2
 * @returns {number}
 * Ainda tem referencias de chamada de outras funçoes, caso necessario
 */
const funcao = (nota1,nota2)=> nota1+nota2
console.log(funcao(4,7))

console.clear();

//inserir dados (chave/valor)
sessionStorage.setItem("mode","dark_mode_1");

//recuperar dados (feito,via chave)
const corScreen = sessionStorage.getItem("mode"); //OBS: Buscar uma via chave que não é correta ou não existe é permitido e retorna null

//remover item (feito,via chave também)
sessionStorage.removeItem("mode");

sessionStorage.clear();

//trabalhando ccom objetos, para essa finalidade precisamos trabalhar com conversão de tipo ja que la é armazenado somente texto
// E a melhor forma de trabalhar oraganizadamente com estrutura textuais é organizando como json
const pessoa = {
    nome:"maria",
    idade:14,
    job:"programadora",
}
sessionStorage.setItem("person",JSON.stringify(pessoa));

// recuperando para json
const pessoaEmTexto = sessionStorage.getItem("person");
const pessoaEmObjeto = JSON.parse(pessoaEmTexto)
console.log(pessoaEmObjeto.nome,pessoaEmObjeto.job)


