document.getElementById('promise').innerHTML = `
<p> Promessas são recursos que a gente utiliza para manipular dados que a gente não tem uma noção exata sobre o retorno ou  tempo de execução do código vai demorar para trazer esse recurso.</p>
<ul>
        <li>Quando usar, sempre que não temos a noção sobre um retorno de 1 dado;</li>
        <li>Antes das promises a gente usava funções de callback agora podemos criar uma nova promessa e retornar ,e quando receber o valor da função retornada tratamos com .then() e .catch()</li>
        <pre>
            <code class="code-style">
            //exemplo de uso de promise
            /** Essa função gera um tempo aleatorio */
            const gerarTempo = (min, max) => {
             min *= 1000;
             max *= 1000;
             return Math.floor(Math.random() * (max - min) + min);
            };
            esperaAi("Frase 1 ", gerarTempo(1, 3));
            esperaAi("Frase 2 ", gerarTempo(1, 3));
            esperaAi("Frase 3 ", gerarTempo(1, 3));
            console.clear();
            
            /** No js a Promise funciona basicamente assim ele executa aleatorio o tempo não da pra dizer
            * quem vai execuytar ou quando vai executar
            */
            
            //Como resolver esse problema na ordem de execução com promisse?
            // Bem para isso precisamos utilizar async e await!  mas vamos treinar promises
            // 1º fazemos a função esperAi retornar uma Promise
            function esperaAiTwo(msg, tempo) {
             return new Promise((resolve, reject) => {
               // em uma promise precisamos ou resolver ou rejeitar e para isso precisamos chamar o metodo resolve dentro dela
               setTimeout(() => {
                 resolve(msg);
               }, tempo);
             });}
             
             esperaAiTwo("Frase 1 ", gerarTempo(1, 3))
            .then((resp) => {
            console.log(resp);
            })
            .catch();
            esperaAiTwo("Frase 2 ", gerarTempo(1, 3))
            .then((resp) => {
            console.log(resp);
            })
            .catch();
            esperaAiTwo("Frase 3 ", gerarTempo(1, 3))
            .then((resp) => {
            console.log(resp);
            })
            .catch();
        </code>
    </pre>
</ul>
`