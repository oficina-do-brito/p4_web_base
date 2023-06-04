document.getElementById('uteis').innerText = `
    -- Desestruturação de objetos --

    É o ato de retirar propriedades de um objeto e facilitar o acesso ex:

    const objetoJogador = {
    nome: "JAlba",
    idade: 48,
    falar() {
    console.log(\`falando - Meu nome é \${this.nome} e tenho \${this.idade} anos\`);
    },
    };

    console.clear();
    const { nome, idade } = objetoJogador;
    console.log(nome, idade);


    -- Tratamento de erros --
    Sempre a gente achar que vai fazer um código perigoso que pode lançar algum erro e que demonstre ao usuário, erro de bd etc é recomendável que a gente faça o tratamento , previna ou seja coloque dentro de try catch.
    o try significa tente executar se ocorrer algum erro faça catch:
    try {
    console.log(vanilla);
    } catch (error) {
    console.log("essa variavel não existe")
    }
    O try catch serve para que nós não façamos exposição de erros ao usuario


    --Reducer--
    É um método do javascript que é aplicado sobre arrays para reduzir um array a um único elemento é bem versátil para que o programador possa estar somando itens de um array por exemplo:
    O reducer funciona quase igual ao map, ele recebe uma função de callback e essa função deve sempre retornar algo vamos a um exemplo, somar todos os itens de um array:
    const numeros = [1, 2, 3, 4, 5, 65, 7, 8, 9];
    //valor default inicial do acumulador=0
    var somado = numeros.reduce(function (acumulador, valor, index_do_valor, array) {
    return (acumulador += valor);
    }, 0);
    console.log(somado);
    combinando reducer,filter e …

`