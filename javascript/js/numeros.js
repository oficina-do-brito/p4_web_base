document.getElementById("numeros").innerHTML = `
<p>Ao trabalharmos com números no javascript existem métodos que nos facilitam também a vida do programador por exemplo:</p>
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