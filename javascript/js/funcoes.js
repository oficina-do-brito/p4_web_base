document.getElementById('funcoes').innerHTML = `
<p>Como o javascript é uma linguagem também funcional, algo interessante que podemos fazer com a linguagem é atribuir a uma variável 1 função anônima por exemplo</p>
<p>Existem basicamente 3 tipos ou nomenclaturas de funções no javascript</p>
<ul>
        <li><b>função normal </b>: que inicia com a nomenclatura function</li>
        <pre>
            <code class="code-style">
            function somaTwoNumber(num1, num2) {
                return num1 + num2;
               }               
            </code>
        </pre>
        <li><b>função anonima </b>: que não tem nome, normal mente usamos dentro de outras funçoes como callbacks e por ai endiante</li>
        <pre>
            <code class="code-style">
            const soma = function (num1, num2) {
                return num1 + num2;
            };                          
            </code>
        </pre>
        <li><b>arrow function </b>: são basicamente functions anonimas com sintax enxuta , pois é se ja estudou vue ja conhecce o conceito . A outra diferença de funçoes normais é que aqui o this. tem o ccomportamento diferente</li>
        <pre>
            <code>
            const somanova = (num1, num2) => num1 + num2;                          
            </code>
        </pre>

        <p>Para exemplificar vermos a diferença do this dentro da errow vamos ver num objeto como ele se ccomporta </p>
        <pre>
            <code class="code-style">
            const jarbas = {
                nome:"Qualquernome",
                resultado: 0,
            
                //função normal
                somaTwoNumber: function somaTwoNumber(num1, num2) {
                    return num1 + num2;
                },
                //anonim
                soma: function (num1, num2) {
                    return num1 + num2;
                },
                //eroow funtion
                somanova: (num1, num2) => num1 + num2,
            
                //DEMONSTRAÇÂO -----------------------------------------------------
                mostrarResultado: function mostrarResultado() {
                    console.log(this.resultado);
                },
                //anonim
                mResultado: function () {
                    console.log(this.resultado)
                },
                
                //eroow funtion
                r: () => console.log(this.resultado),
            }
            jarbas.resultado = jarbas.somaTwoNumber(1,2);
            jarbas.mostrarResultado();
            jarbas.mResultado();
            jarbas.r();            
            </code>
        </pre>
        <p>Note especificamente dentro da arrow function o this aponta undefined isso acontece por que  o this. não é vincculado a quem chama.
            Em funções regulares, a this palavra-chave representa o objeto que chamou a função, que pode ser a janela, o documento, um botão ou qualquer outra coisa.
            Com funções de seta, a this palavra-chave sempre representa o objeto que definiu a função de seta.
        </p>
        <h5>Mas e se a gente quizer concertar tem como fazer vincular o this do objeto ao this chamado dentro da arrow function?</h5>
        <p>Sim, isso se chama binding, é uma gambiarra pq a gente deve saber desse efeito de utilizar arrow function mais vamos la, na definição da classe de 1 objeto fazer o bind do this</p>
        <pre>
            <code class="code-style">
            this.r = this.r.bind(this),          
            </code>
        </pre>
</ul>
`