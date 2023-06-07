document.getElementById('cokies').innerHTML = `
<p>Para trabalharmos com cookies antes precisamos saber a diferença entre Cookies e Localstorage:</p>
<p>
Cookies são destinados a serem lidos pelo servidor, enquanto o localStorage só pode ser lido pelo navegador. Portanto, os cookies são restritos a volumes de dados pequenos, enquanto o localStorage pode armazenar mais dados.
</p><p>
Local storage e cookies são duas opções de armazenamento de dados no navegador que permitem que um site armazene informações no lado do cliente. No entanto, existem algumas diferenças importantes entre eles.
</p><p>
O primeiro e mais óbvio é o tamanho de armazenamento disponível. Cookies são geralmente limitados a cerca de 4KB de dados, enquanto o local storage pode armazenar até 10MB de dados por site. Isso significa que o local storage é muito mais adequado para armazenar grandes quantidades de dados, enquanto os cookies são mais adequados para pequenas quantidades de informações importantes.
</p><p>
Outra diferença é a forma como os dados são enviados para o servidor. Quando você faz uma solicitação a um site, os cookies são enviados junto com a solicitação, permitindo que o servidor leia os cookies e use as informações armazenadas para personalizar a resposta. No entanto, o local storage não é enviado para o servidor, o que significa que as informações armazenadas nele só podem ser lidas pelo próprio navegador.
</p><p>
Além disso, o local storage é armazenado de forma mais permanente do que os cookies. Os cookies geralmente têm uma data de validade e são excluídos quando essa data é atingida, enquanto o local storage fica armazenado até que seja explicitamente excluído pelo usuário ou pelo site.
</p><p>
Em resumo, os cookies são mais adequados para armazenar pequenas quantidades de informações importantes que precisam ser enviadas para o servidor com cada solicitação, enquanto o local storage é mais adequado para armazenar grandes quantidades de dados que precisam ser armazenados de forma mais permanente no navegador.
</p>
<br/>
<p>A melhor forma de trabalharmos com cookies é utilizando a biblioteca jscookies. ela pode ser incorpora ao nosso arquivo usando o cdn e quem trabalha com javascript sabe que para encontrar qualquer cdn facilmente é recomendado usar cdn js a forma simples e pratica de encontar biblioteca js seja ela qual for</p>
Colocado o cdn simbora pro codigo:
<ul>
        <pre>
            <code>
                Cookies.set("id_usuario","1777",{    //options
                    expires:7,                      //tempo de expiração em dias
                    domain:"negochico.com"          //Para qual site o cookie e valido
                });
                //Por padrão um cookie tem a duração de 1 sessão


                //resgatando cookie
                Cookies.get("id_usuario");

                //removendo
                Cookies.remove("id_usuario");
            </code>
        </pre>
</ul>
`