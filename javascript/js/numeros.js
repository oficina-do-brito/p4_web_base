document.getElementById("numeros").innerHTML = `
<br/>
<p>Pra representar os tipos numericcos no js temos tanto o tipo primitivo "number" quanto o objeto encapsulado "Number"? ai você provavelmente deve estar se perguntando e pra que serve o objeto encapsulado Number se ja existe o tipo primitivo que ja representa esse tipo na linguagem?</p>
<p>Bem na verdade é que o Number tipo objeto, tem um proposito e ele serve principalmente para situaçoes em que não tenhamos certeza se estamos recuperando um dado numerico, ex: ao trabalhar com diferentes tipos banco de dados que geralmente possui tipagem de armazenamento muito diferentes </p>
<p>Ao trabalharmos com números no javascript existem métodos que nos facilitam também a vida do programador por exemplo</p>
<p>o objeto Number possui muitos metodos de conversão, verificação e etc... esses metodos são bem uteis e podemos saber mais sobre eles em: <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number" target="_blank">link</a></p>
<pre>
        <code>
        console.clear();
        let numero =10
        let numeral = new Number(20)
        console.log(numero,numeral.valueOf())
        console.log(typeof(numero),typeof(numeral.valueOf()))      
        </code>
    </pre>
<ul>
    <li><b>isNaN()</b>: o NAN (not a number) é muito usado para saber quando ocorre um erro inesperado, tipo somar 1 numero com 1 string, o resultado é NaN, podemos verificar se uma conta deu errado por ex:</li>
    <pre>
        <code>
        let a = "sadsad";
        let b = 10;
        const c = a * b;
        console.log(Number.isNaN(c));        
        </code>
    </pre>
    <li><b>isInterger()</b>:verificar se o numero é inteiro</li>
    <pre>
        <code>
        console.log(Number.isInteger(b));      
        </code>
    </pre>
    <li><b>parseFloat()</b>: tipo de casting, transforma um inteiro em flutuante</li>

    <li>Como estamos lidando com números o javascript nos fornece o objeto "Math"  que tem varios metodos para facilitar operações com números</li>
</ul>
`