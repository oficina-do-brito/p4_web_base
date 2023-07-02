document.getElementById('objetos').innerHTML = `
<p>Ao criarmos um objeto no javascript, por mais simples que seja a gente tem acesso ao this. feito isso só nos resta usar:</p>
<ul>
        <li><b>Podemos criar objetos que são diretamente instanciados em variável:</b>:</li>
        <pre>
            <code class="code-style">
                const objetoJogador = {
                nome: "mario",
                idade: 99,
                falar() {
                  console.log(\`falando - Meu nome é \${this.nome} e tenho \${this.idade} anos\`);
                },
               };
               objetoJogador.falar();
            </code>
        </pre>

        <li><b>Ou o mais certo é que a gente crie 1 objeto Instância de uma classe :</b>:</li>
        <p>Outro fator não menos importante é que um objeto pode ter suas propriedades acessadas pela notação de [ ] invés de . e isso é interessante pq podemos fazer coisas cabulosas já que podemos transformar acesso cada vez mais dinâmicos ex:
        </p>
        <pre>
            <code class="code-style">
            const objeto_j = {nome: "rugson",idade: 88,falar() {
                console.log(\`falando - Meu nome é \${this.nome} e tenho \${this.idade} anos\`);
              },
             };   console.log(objeto_j["nome"]);
             
             const propriedade = "nome";
             
             //tornando dinamico
             console.log(objeto_j[\`\${propriedade}\`]);
             
            </code>
        </pre>
</ul>
`