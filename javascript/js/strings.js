let nesseEscopo = "tem algo escrito";
document.getElementById("string").innerHTML = `
    <p> Que nem na maioria das outras linguagem de programação uma string no js é nada mais do que uma sequencia de caracteres</p>
    <p>A diferença é que no js são fornecidos metodos ou formas para que o nosso trabalho com strings seja facilitado, e entre essas facilidades estão:</p>
    <ul>
        <li><b>template strings</b>: É a forma que temos para podermos escrever strings de multiplas linhas, além de fazer a concatenação de variaveis ou metodos usando a estrutura de concatenação: \${variavel} </li>
        <pre>
                <code>
                let nomet = "Nestor";
                console.log(\` o meu nome é \${nomet}\`);
                </code>
        </pre>
        <li><b>escape de caractere</b>: Podemos escapar caracteres propositalmente usando \\</li>
        <li><b>Acesso de carctere pelo index:</b> Podemos acessar caracteres via index ja que strings são um array de caracteres, conjunto de caracteres ou se preferir chamar como se diz na matematica arranjo </li>
        <pre>
                <code>
                let nomet = "Nestor";
                console.log(nomet[5]);
                </code>
        </pre>
        <li><b>Metodo para separação de strings split():</b> Podemos utilizar o metodo split para separar 2 strings</li>
        <pre>
                <code>
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
                </code>
        </pre>
        <li><b>temos muitos outros metodos o match,search,replace,toString,toUpperCase e por ai vai ... :</b> O que não falta é metodo para facilitar nossa vida no js</li>
    </ul>

`