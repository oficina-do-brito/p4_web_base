document.getElementById('basico').innerHTML = `
    <h1> Bem vindo ao mundo javascript com utilização do typescript <h1>
    </br></br></br>
    <p>Para utilização do typescrip precisamos do node.js instalado, mais precisamente do instalador de pacotes dele o npm:</p>
    <pre>
        <code>
            npm install -g typescript
        </code>
        </pre>
    <p>Para iniciar um mini projeto com typescript basta que a gente crie o seu arquivo de configuração do typescript e isso é feito a partir do comando de iniciação:</p>
    <pre>
        <code>
            tsc --init 
        </code>
    </pre>
    <p>E para iniciar projeto com javascript e  registrar as dependencias, criar package.json:</p>
    <pre>
        <code>
            npm init -y
        </code>
    </pre>

    <p>E pra fazer o typescript transpilar e virar javascript?</p>
    <pre>
        <code>
        tsc
        </code>
    </pre>
    
    <p>E por que utilizar typescript nos nossos projetos?</p>
    <p>Se você vem percorrendo essa mini visão sobre o mundo javascript desde o nicio com certeza vai lembrar que o javascript ocasionava muitos erros durante o desenvolvimento e os programadores quebrabvam cabeça e perdiam tempo com isso.
    Pois bem a utilização desse reccurso denominado superset nos proporciona uma potencial detecção desses erros durante o desenvolvimento dos projetos por meio da tipagem que ele nos obriga a fazer durante a escrita</p>
    <p>Além disso ele  adiciona ou faz a melhoria de recursos úteis à linguagem JavaScript, como tipagem estática, interfaces, classes, herança, módulos e suporte para recursos modernos do JavaScript, como async/await. A tipagem estática ajuda a prevenir erros comuns em tempo de execução, permitindo que os desenvolvedores detectem e corrijam erros de digitação e de tipo durante a fase de desenvolvimento. As interfaces fornecem uma maneira de descrever a forma esperada de um objeto, tornando o código mais previsível e fácil de entender. As classes e a herança permitem que os desenvolvedores criem objetos complexos e organizem seu código de forma mais eficiente. Os módulos permitem que os desenvolvedores dividam seu código em arquivos menores e mais gerenciáveis. Em resumo, o TypeScript ajuda os desenvolvedores a escrever código mais seguro, previsível e fácil de manter.</p>
    
    


`