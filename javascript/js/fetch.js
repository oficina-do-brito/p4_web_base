document.getElementById('fetch').innerHTML = `
<p>Não tem como falar de fetch Api sem lembrao do Ajax -  assincronal javascript xml, ele era o maneira inicial propriamente dito que fazia requisiçoes mas precisamento o metodo XMLHttpRequest - essa função faz requisição de qualquer tipo de dado, em qualquer url
</p>
<pre>
    <code>
        const request = (objeto) => {
        const xmlhttp = new XMLHttpRequest();
        // padrão de resição é: xmlhttp.open('GET', 'www.goole.com',true)
        xmlhttp.open(objeto.method, objeto.url, true);
        xmlhttp.send(null);
       };
       
    </code>
</pre>
<p>E o que isso tem a ver com "Fetch", tem a ver que aprtir dai surgiu uma maneira melhor e mais simplista de fazer http request. A Fetch,onde as requisições já seguem o padrão de sincronicidade e com apenas 1 linha de código é possível fazer uma requisição http;</p>
<ul>
        <li><b>1 fetch retorna por padrão 1 promise que deve ser usado o .then() para resolver a promessa</b>:</li>
        <pre>
            <code>
            //exemplo de requisição com fetch api

            fetch("www.google.com")
             .then((resposta) => console.log("deu certo"))
             .catch((erro) => console.log(erro));
            </code>
        </pre>

        <li><b>fetch pode dar uma dor de cabeça a mais na resolução de promise, e é justamente para resolver isso que inventaram o Axios um simplificador, porém é biblioteca externa</b>:</li>
        <pre>
            <code>
            $ npm install axios
            const axios = require("axios");

            //como é get por padrão já mandamos sem precisar requisitar GET
            axios("https://jsonplaceholder.typicode.com/users").then((dados) =>
            console.log(dados)
            );

            </code>
        </pre>
</ul>
`