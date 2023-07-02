document.getElementById('arrays').innerHTML = `
<p>Apartir daqui ja lidamos com o padigma OO, pois em js quase tudo é objeto ou função <p/>
<p>Todos os objetos JavaScript herdam propriedades e métodos de um protótipo:</p>
<li>Date objetos herdam de Date.prototype</li>
<li>Array objetos herdam de Array.prototype</li>
<li>Person objetos herdam de Person.prototype</li>
<li>O Object.prototype está no topo da cadeia de herança do protótipo:</li>

<p> Então vamos a definição de um Array, são coleções de tipos de dados, vetores e no javascript lidar com arrays é relativamente fácil
 por que todos os objetos como vimos eles herdam propriedades e métodos de um protótipo e no caso dos arrays estão disponiveis para a gente trabalhar com eles:</p>
<ul>
        <li><b>map()</b>: que é um metodo usado para mapear um array, percorrer elemento por elemento. Ele recebe uma função de callback e nessa função você basicamente decide o que vai fazer com cada elemento.
        É muito util e deixa seu codigo menor e mais limpo</li>
        <pre>
            <code class="code-style">
                const alunos = ["nome", "maria"];
                alunos.map( (i) => console.log(i) );
            </code>
            </pre>
        <li>Ver tamanho do array com .length : alunos.length</li>
        <li>alunos.push(“matheus”) : adicionar um novo elemento no final do array</li>
        <li>alunos.pop() : retira o último elemento do array</li>
        <li>alunos.unshift(“br”): adiciona no início do array</li>

</ul>
`