document.getElementById('local').innerHTML = `
<p>É um recurso que serve para que a gente salve dados no navegador do usuario, utilizado para persistencia dados spos recarregamento da pagina ou ao até fechamento da aba> Tem como caracteristicas:</p>
<ul>
        <li>Capacidade de 10mb, aprece pouco mais como os dados são só texto é muita coisa</li>
        <li>Os dados são salvo no bavegador so usuario como ja foi relatado</li>
        <li>Dados não possuem tempo de expiração, mas odem ser removidos</li>
        <li>Os dados serão visualizados na aba Aplication do dev tolls</li>
        <li>Por isso muitos problemasque envolvem questão de segurança são resolvidos passando para os cookies</li>
        <p> Ao usar uma tag de script ou via escrevendo arquivo.js com destino a web o proprio vscode ao digitarmos localStorage ele nos fornece os metodos para uso, então para salvar dados usamos d metodo setItem e do conceito chave e valor:</p>
        <pre>
            <code>
            //inserir dados (chave/valor)
            localStorage.setItem("cor_da_screen","preta");

            //recuperar dados (feito,via chave)
            const corScreen = localStorage.getItem("cor_da_screen"); //OBS: Buscar uma via chave que não é correta ou não existe é permitido e retorna null

            //remover item (feito,via chave também)
            localStorage.removeItem("cor_da_screen");

            //Regra basica todo dado é condiderado texto, então se ligar no Casting durante a recuperação

            //limpar todos os dados do localStorage
            localStorage.clear();
    
            </code>
        </pre>
</ul>
`