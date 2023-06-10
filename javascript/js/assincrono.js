document.getElementById('assincrono').innerHTML = `
<p>O  assincronismo resolve varios problemas de performace em nossas aplicações, pois podemos ter perca de performace devido ao tempo imprevisivel gasto em uma busca de dados de um scraping (probema complexo, considera rede, perca de informação e tratamento da informação) relaizada pela nossa app por exemplo,
ou no mais comum as buscas por dados do nosso backend ao banco de dado. Fato é que dependendo do nivel de complexidade do problema que nossa app resolve, a gente como programador iremos escrever muitos blocos de codicos
sequenciais para entregar uma informação desejada ao usuario. </p><br/>
<p> Mas ai você pensa, bem na escrita tudo bem ter que escrever o codigo em sequencia, mas durante a execução não teria como fazer esses blocos executarem parecido ou seguindo o conceito de thread
não? Sim é possivel e é basicamente esse conceito que o js usa para utilização de <em>Async e await</em>.</p><br/>
<p>Ao escrever uma função, bloco de codigo escopado e comerçamos com sua nomenclatura <b><em>async</b> nomeFuncao(parametros)</em>, o interpretador entende que ele vai ler aquelas instruções,
permanecer trabalhando em segundo plano naquele bloco até terminar a tarefa, e como o bloco foi marcado com async ele permanece executando os outros blocos sequenciais </p>
<img src="img/assinccronismo.png" width="900" height="700" >
<br/>
<a href="https://www.softplan.com.br/tech-writers/o-que-e-programacao-assincrona-e-como-utiliza-la/">mais sobre</a>
<br/>
<br/>
`