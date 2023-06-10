document.getElementById('spred').innerHTML = `
<ul>
        <li><b>Spread </b>é o ato de espalhar conteúdo de variável dentro de outra, é muito útil com arrays, argumentos e por aí em diante, o exemplo mais simples do uso de spread é:</li>
        <pre>
            <code>
            let a = [1, 2, 3, 4, 5, 6, 7];
            let b = [...a];
            console.log(b);            
            </code>
        </pre>

        <li>A diferença de spread para <b>Rest</b>, é que rest junta e é normalmente usado em parametragem ex básico:</li>
        <pre>
            <code>
                function sum(...theArgs) {
                    let total = 0;

                    for (const arg of theArgs) {
                        total += arg;
                    }

                    return total;
                }
               console.log(sum(1, 2, 3, 3, 4, 4, 5));          
            </code>
        </pre>
</ul>
`