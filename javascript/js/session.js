document.getElementById('session').innerHTML = `
<p> É um recurso similar ao local storage </p>
<ul>
        <li>Possui capacidade maxima de 5mb ou seja metade do local storage</li>
        <li>Os dados também sçao salvos no computador do usuario</li>
        <li>A diferença é que os dados expiram quando a aba é fechada</li>
        <p> Ao usar uma tag de script ou via escrevendo arquivo.js com destino a web o proprio vscode ao digitarmos sessionStorage ja nos tras sugestoẽs que nem o localStorage e a forma de trabalhar com ele é muito similar inclusive:</p>
        <pre>
            <code>
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
            const pessoaEmObjeto = JSON.parse(pessoaEmTexto);
            console.log(pessoaEmObjeto.nome,pessoaEmObjeto.job);
    
            </code>
        </pre>
</ul>
`