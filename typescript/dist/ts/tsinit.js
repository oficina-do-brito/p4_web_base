"use strict";
document.getElementById('inicio').innerHTML = `
    <h1>Typescript<h1>
    <p>Semelhanças e diferenças do js</p>
    </br></br></br>

    <h2>Comentarios</h2>
    <p>No typescript raramente usasmos comentarios de codigos, exeto para explicação de uma logica de bloco de codigo que seja confusa.
    Isso acontece pq ao utilizar ts com a typagem ao passar o mouse encima de uma função ja é apresentado sobre aspectos dela, tipos dos parametros, tipo de retorno e etc... </p>
    <br/>
    <p>Isso só é possivel graças ao Visual Studio Code possuir uma ótima integração com JSDoc, possibilitando debugar tipos enquanto escreve-se códigos JavaScript. Isto porque a Intelissense do VSCode utiliza o serviço de JavaScript: Salsa, desenvolvido pelo time do TypeScript. Este serviço torna a Intelissense muito mais inteligente, possibilitando que além de documentar seu código JavaScript com as JSDoc, você pode também tipá-lo. Caso você você queira saber mais, vale a pena acessar a página que explica mais sobre o Salsa na documentação do TypeScript.</p>
    <h3>O que é o JSDoc?</h3>
    <br/>
    O JSDoc é um projeto JavaScript criado com o propósito de documentar APIs de aplicações ou bibliotecas JavaScript. Existem muitas ferramentas assim fora do ambiente JS, como o JavaDoc no mundo Java, phpDocumentor para PHP e Doxygen para C++.
    <br/>
    <p>
    A notação de uma JSDoc é simples, sendo parecida com um comentário multi-linhas do JavaScript tendo apenas um * a mais (/** */) ja usamos ela la no javascript porém eu deixei pra apresentar mais recursos sobre ela aqui na seção de tipescript. Apenas por que eu acho intereçante
    repassar conhecimento de como as coisas funcionam por debaixo do pano.
    </p>

    <pre>
        <code>
        \/**
        \* Função responsável por retornar um componente exibindo o
        \* nome da pessoa usuária.
        \*
        \* @param {User} user
        \* @returns {JSX.Element}
        \*/
        function renderUserName({ name }) {
          return <Text>{name}</Text>;
        }
        </code>
    </pre>

<p>Podemos ver então que criamos uma documentação básica, explicando o propósito a qual a função foi criada. Mas também percebe-se o seguinte,
 existem tipos declarados no parâmetro e no retorno da mesma. Isto é muito importante, pois é possível declarar tipos através de JSDocs, veja o 
 exemplo do tipo User que usamos anteriormente:</p>
 <pre>
    <code>
    \/**
    \ * Tipo da entidade de Pessoa Usuária.
    \ *
    \ * @typedef User
    \ * @property {string} name - Nome da pessoa usuária
    \ * @property {string} birthdate - Data de nascimento da pessoa usuária
    \ * @property {string} birth - Data de nascimento da pessoa usuária
    \ */
    </code>
</pre>

VS Code + JSDoc = TypeScript
<br/>
Tendo isto tudo posto, podemos percorrer algumas notações do JSDoc.

Notações do JSDocs
Como dito anteriormente, para declarar uma JSDoc basta utilizar o bloco de documentação /** */. Dentro dele você pode escrever um texto plano (descrevendo seu trecho de código) e também tags JSDoc. Começando a nossa lista pela notação @typedef.

@typedef
A tag @typedef é equivalente a uma declaração de type alias no TypeScript. Ou seja, esta tag é muito utilizada para declaração de tipos mais complexos e estruturas de múltiplos campos no seu código.

Veja o exemplo abaixo de um type alias em TypeScript:
<pre>
    <code>
        type Person = {
            name: string;
            surname: string;
            age: number;
            gender?: boolean;
            weight: number;
            height: number;
          };
    </code>
</pre>
O type alias acima declara ao todo seis propriedades diferentes para o tipo Person com os mais variados tipos, para utilizarmos este tipo em um código JavaScript podemos utilizar o @typedef aliado ao @property, veja a seguir:
<pre>
    <code>
        \/**
        \* Tipo da entidade \`Person\`
        \*
        \* @typedef {Object} Person
        \* @property {string} name
        \* @property {string} surname
        \* @property {number} age
        \* @property {boolean} [gender]
        \* @property {number} weight
        \* @property {number} height
        \*/
    </code>
</pre>

Veja que a sintaxe muda um pouco, vindo os tipos antes dos nomes das propriedades. Além disto, para declarar tipos opcionais, como o caso de gender para o caso da pessoa não querer declarar seu gênero, podemos utilizar colchetes em volta do nome da propriedade para torná-la opcional.

Vale ressaltar que o @property tem seu diminutivo @prop, deixando mais simples a leitura da sua definição de tipo.

@type
A tag @type é usada para definirmos o tipo de uma expressão, ou seja, se quisermos utilizar o tipo Person declarado anteriormente, podemos apenas declarará-lo da seguinte forma:
<pre>
        <code>
        \/**
        \* @type {Person}
        \*/
        </code>
</pre>

const person = {};
Para este caso poderíamos também utilizar a tag @constant para o caso de constantes.
<pre>
        <code>
        \/**
         \* @constant
         \* @type {Person}
         \*/
        </code>
</pre>

const person = {};
Desta forma, ao digitar Ctrl + Espaço veremos o seguinte:

Demonstração do Intelissense, exibindo as propriedades declaradas no tipo Person

Como demonstrado na imagem anterior, o Intelissense através do JSDoc consegue inferir tipos do JavaScript.

O @type também disponibiliza declarações inline, podendo declarar tipos que não serão reutilizados através da sintaxe TypeScript:

<pre>
        <code>
        \/**
        \* @type {{ x: number, y: number }} Point
        \*/
        </code>
</pre>
@callback
Para casos onde é necessário declarar um tipo para uma função, o melhor a se fazer é utilizar o @callback junto às tags @param e @returns, que como o nome já diz são responsáveis, respectivamente, pelos tipos dos parâmetros e pelo retorno da sua função. O exemplo a seguir detalha uma função que contém um parâmetro único e um retorno:

    <pre>
        <code>
        \/**
         \* @callback FilterLegalAgePersons
         \* @param {Person[]} persons
         \* @returns {(Person & { fullName: string })[]}
         \*/
        
        \/** @type {FilterLegalAgePersons} \*/
        const filterLegalAgePersons = (persons) =>
          persons
            .map(({ name, surname, ...person }) => ({
              fullName: \`\${name} \${surname}\`,
              name,
              surname,
              ...person,
            }))
            .filter(({ age }) => age >= 18);
        </code>
    </pre>

É possível também declarar funções curry, basta neste caso sua função retornar a funções separadamente, veja o exemplo:
<pre>
        <code>
        \/**
        \* @param {BrowserHistory} history
        \* @returns {(route: string) => void}
       \*/
       const push = (history) => (route) => history.push(route);
        </code>
    </pre>

Desta forma é possível ver que o tipo criado para a nossa função é o seguinte:

const push = (history: BrowserHistory) => (route: string) => void
Com o tipo declarado para nossas funções, a utilização destas fica muito mais simples. Além disto as deixamos documentadas facilitando a compreensão do código escrito.

@template
E por último, podemos declarar tipos genéricos através do JSDoc, para isto devemo utilizar a tag @template que é responsável por criar declarações de tipos genéricos, veja o exemplo a seguir em TypeScript:
<pre>
    <code>
        function useState<T>(initialState: T) {
            let state = initialState;
          
            const setState = (newState: T) => {
              state = newState;
            };
          
            return [state, setState];
          }
    </code>
</pre>

<p>O código acima está em TypeScript, não existem tipos genéricos em JavaScript porém podemos declará-lo através de uma JSDoc, o exemplo a seguir demonstra este uso:</p>
<pre>
        <code>
        \/**
        \* Função utilitária criado com o propósito de controlar estados
        \*
        \* @template T
        \* @param {T} initialState
        \* @returns {[T, (newState: T) => void]}
        \*/
        function useState(initialState) {
          let state = initialState;
        
        \/**
        \* Função responsável por definir novo estado.
        \*
        \* @param {T} newState
        \*/
          const setState = (newState) => {
            state = newState;
          };
        
          return [state, setState];
        } 
        </code>
    </pre>
    <br/>
    <a href="https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html" target="_blank">mais sobre em </a>
    <br/>
    <h2>Adicionando tipagem</h2>
    <p>A tipagem no typescript é sempre adionada apos o operador ":" por exemplo  uma função, fazemos a tipagem dos parametros e retorno alem das variaveis que estão no seu escopo:</p>
    <pre>
        <code>
            // 1 functionque não retorna
            function imprimirNoConsole(...nomes:string[]):void{
              console.log(nomes);
            }

            // 1 function com retorno 
            function soma(num1:number,num2:number): number{
              return num1+num2;
            }
        </code>
    </pre>
    <ul>
        <li><b>tipagem de objetos</b></li>
        <p>é comum utilizarmos functions para criar esses objetos, que terão atributos e métodos e com o typescript a utilização deles ficam cada vex mais claros:</p>
        <pre>
        <code>
        function criaPessoa(nome: string, idade: number, altura: number) {
          const Pessoa: { nome: string; idade: number; altura: number; falar(): void } =
            {
              nome: nome,
              idade: idade,
              altura: altura,
              falar() {
                console.log(\`Olá, meu nome é \${this.nome} e tenho \${this.idade} anos\`);
              },
            };
          return Pessoa;
         }
         console.log(typeof criaPessoa("João", 27, 1.75));
         const pessoa2 = criaPessoa("clodoaldo", 38, 1.76);
         console.log(pessoa2.idade);
        </code>
    </pre>

        <li><b>Classes e objetos</b></li>
        <p>As classes no typescript são muito semelhantes às classes do java, possuem modificadores de acesso, construtores ,get e setters , permite herança e etc, embora tenham diferenças na forma de escrita.
        </br>Para criar uma classe no typescript  da forma convencional:
        </p>
        <pre>
          <code>
          /exportar a classe Pessoa pq  vamos querer utilizar fora desse módulo
          export class Pessoa{
             private readonly id : number;//não pode ser alterado
             private nome: string;
             private telefone: string;
             private email: string;
             private senha: string;
             private endereco: string;
             private readonly colaboradores: Colaboradores[] = [];//não pode ser alterado
          
             constructor(id:number,nome: string, telefone: string, email: string, senha: string, endereco: string){
                 this.id=id;
                 this.nome = nome;
                 this.telefone = telefone;
                 this.email = email;
                 this.senha = senha;
                 this.endereco = endereco;
             }  
            }
          
          </code>
        </pre>
          <p>Porém podemos criar de uma forma mais reduzida (syntax enchuta)que é colocando os atributos diretamente no construtor:</p>
        <pre>
          <code>
          export class Colaboradores{
            constructor(private readonly id:number,private nome: string,private telefone: string){}
         }
         
          </code>
      </pre>
       
        <li><b>Herança</b></li>
        <p>Para fazermos uma classe Herdar de outra utilizamos a palavra chave extends
        logo a classe filha herda todos os atributos e comportamentos da classe mãe ex:
        </p>
        <pre>
          <code>
            class Pessoa {
              constructor(private _nome: string, private idade: number, private sexo: string, private _cpf: string) { }
            
              public geNome(): string {
                  return this._nome;
              }
              public setNome(value: string) {
                  this._nome = value;
              }
              public getCpf(): string {
                  return this._cpf;
              }
              public setCpf(value: string) {
                  this._cpf = value;
              }
              public toString(): string {
                  return \`Nome: \${this._nome}, Idade: \${this.idade}, Sexo: \${this.sexo}, CPF: \${this._cpf}\`;
              }}
            
            class Aluno extends Pessoa {
              constructor(nome: string, idade: number, sexo: string, cpf: string, private matricula: number, private curso: string) {
                  super(nome, idade, sexo, cpf);
              }
              public getMatricula(): number {
                  return this.matricula;
              }
              public setMatricula(value: number) {
                  this.matricula = value;
              }
              public getCurso(): string {
                  return this.curso;
              }
              public setCurso(value: string) {
                  this.curso = value;
              }
              public toString(): string {
                  return \`\${super.toString()}, Matricula: \${this.matricula}, Curso: \${this.curso}\`;
              }
           }
           const p1 = new Pessoa('João', 20, 'M','116.009.098-61');
           p1.setNome('Maria');
           console.log(p1.geNome());
           console.log(p1.toString());
           const a1 = new Aluno('João', 20, 'M','116.009.098-61', 123, 'ADS');
           console.log(a1.toString());
           

          </code>
       </pre>
       <p>Toda vez que precisamos ter acesso a uma coisa da superclasse e estamos na subclasse precisamos usar a palavra reservada super por exemplo.
       super.getNameUsuario();
       </p>

       <li><b>Metodos estaticos e atributos</b></li>
       <p>São métodos estaticos aqueles que podem ser acessados sem instanciar a classe, usamos a palavra "static" nomeMetodo(){}
       Atributos funcionam com a mesma lógica;
       </p>
       <pre>
          <code>
          static novo():void{
            console.log('Novo Aluno');
          }
          onsole.log(Aluno.novo());
          </code>
        </pre>

        <li><b>Interfaces</b></li>
        <p>Deve conter Nomenclatura seguindo padrão INome...São utilizadas para criar tipo ou contrato com quem implementa elas:
        </p>
          <pre>
            <code>
            interface IAluno {
              nome: string;
              idade: number;
              sexo: string;
              cpf: string;
              matricula: number;
              getName(): string;
           }
           class Aluno2 implements IAluno {
              constructor(public nome: string, public idade: number, public sexo: string, public cpf: string, public matricula: number) { }
           
              public toString(): string {
                  return \`Nome: \${this.nome}, Idade: \${this.idade}, Sexo: \${this.sexo}, CPF: \${this.cpf}, Matricula: \${this.matricula}\`;
              }
              public getName(): string {
                  return this.nome;
              }
           }
           
            </code>
          </pre>
          <li><b>Orientação a objeto</b></li>
          <p> Quando criamos classes e fizemos uso de herança como nos exemplos acima ja entramos no assunto de OO e ja fomos beneficiados com uma das principais vantagem dela que é a reutilização de codigo.</p>
          <p>Outras vantagens:</p>
          <li>Boas praticas de programação</li>
          <li>Segurança - No acesso a informação, por exemplo o uso de modificadores de visibilidade, a atributos, metodos de acesso</li>
          <li>Facilita a manutenção - Mais organização, direto ao ponto </li>

          <p>Começaremos estudar poo no typescript com a demonstração de um padrão de escrita de atributos, é basicamente no ts um atributo privado deve sempre ser iniciado 
          com um underline ex : private _nome:string </p>
          <p>Isso é bem util ao fazer get e ao utilizarmos ele em nossos codigos com codigo enchuto </p>
            <pre>
              <code>
              class Pessoa{
                constructor(
                    private _nome:string,
                    private _idade:number,
                    private _altura:number){}
            
                public  get nome(){
                    return this._nome;
                }
            
              }
            
            const p1 = new Pessoa("mariscleuda",53,1.89);
            console.log(p1.nome);
              </code>
            </pre>

            <h4>Classes que não sejam extendidas</h4>
            <p>No java quando queremos que uma classe não possa ser extendidas por denais classes a gente usa a palavra reservda final. E no typescript como fazemos?</p>
            <p>No typescript a gente coloca o construtor como privado, simplesmente</p>
            <pre>
              <code>
              class Admin{
                private constructor(
                    private _nome:string,
                    private _idade:number,
                    private _altura:number){}
            
                public  get nome(){
                    return this._nome;
                }
            
              }
              </code>
            </pre>
            <h4>Sobescrita de metodos</h4>
            <p>Um dos recursos mais importantes da orientação a objetos é a possibilidade de sobrescrever ou sobrecarregar métodos e propriedades.</p>
            <p>E no typescript isso não é possivel, se você criar dois metodos com mesmo nome ele irá reclamar, De fato o typescript/javascript ja oferece tanto recurso como
            opradores de rest spread e tudo mais que seria um recurso a mais e pior, ineficiente para linguagem, linguagens interpretadas normalmente não contam com esse recurso. </p>
            </br>

            <h4>classes abstratas e polimorfismo</h4>
            <p> Uma classe abstrata é uma classe que nunca se destina a ser instanciada; em vez disso, elas são usadas para passar propriedades para subclasses por meio de herança.
            <br/>
            Suponhamos uma situação real, O dono de uma Oficina tem em seu sistema uma classe referente ao trabalhadores, essa classe não precisa ser instanciada,
            ela só serve pra ditar (representar) o que um trabalhador deve fazer no seu dia dia, comportamentos, logo fazemos essa classe  'pessoa trabalhadora' (ser uma abstrata).
            Querendo que um trabalhador faça checkin, então pode criar um metodo fazer checkin, e qualquer pessoa na condição de ser uma 'pessoa trabalhadora' dali, deve ser obrigado a fazer checkin, mesmo que o checkin seja diferente dos demais :
            </b>
            O metodo checkin pode agir então de acordo com o tipo de trabalhador e sua função, pode ser implementado de diferentes maneiras em cada classe.
            </p>
            <pre>
              <code>
              abstract class PessoaTrabalhadora {

                abstract  fazerChekin(pessoa:PessoaTrabalhadora):void;
            
              }
              class Funcionario extends  PessoaTrabalhadora {
              
                  fazerChekin(pessoa: PessoaTrabalhadora): void {
                      console.log("implementação qualquer... Funcionario realizou checkin")
                  }
              
              
              }
              
              class Gerente  extends PessoaTrabalhadora{
              
                  public fazerChekin(pessoa: PessoaTrabalhadora): void{
                      console.log("implementação qualquer... gerente realizou checkin")
                  }
              
              }
              
              class Dono{
              
                  //instancia de checkin
              
                  public verChekin(){
                      // acesso exemplar checkin
                      console.log("O funcionario chekin da porca e o gerente Mauricio fizeram checkin na oficina");
                  }
              }
              
              const f1 = new Funcionario();
              f1.fazerChekin(f1);
              
              const g1 = new Gerente();
              g1.fazerChekin(g1);
              
              
              const d = new Dono();
              d.verChekin();
              </code>
            </pre>

            //exx polimorfismo

            <h4>Tipagem Generica (Generics)</h4>
            <p>No javascript ja existe um tipo generico e não por acaso ele é evitado com ajuda do typescript, E você pode até se perguntar, oche mas se ja temos um
            tipo generico por que não utilizamos ele para soluções que exigem tipos genericos?</p>
            <p>Bem, seu pensamento tem uma logica, mas talves a informação que le falta é que ao usarmos o <em>any</em> em uma função identidade por ex, vamos perder
            a informação do tipo retorno dela</p>
            <p>Se passamos um número como parametro esperando um numero ser retornado(função identidade), ficamos inseguros pois a única informação que temos é que qualquer
            tipo pode ser retornado</p>
            <pre>
              <code>
                /** Função identidade com any -- Forma generica errada -- */
                function identity(arg: any): any {
                  return arg;
                }
              </code>
            </pre>
            <p>Em vez disso, precisamos de uma forma de capturar o tipo do argumento de forma que também possamos usá-lo para denotar o que está sendo retornado.
             Aqui, usaremos uma variável de tipo , um tipo especial de variável que funciona com tipos em vez de valores.</p>
             <pre>
              <code>
              function identity<Type>(arg: Type): Type {
                return arg;
              }
              console.log(identity(1))
              
              /** Por padrão usamos <T> */
              
              function somatize<T>(argumentos:T):T{
                  return argumentos;
              
              }
              
              // esclarecendo o tipo que identidade vai receber e devolver
              const umaString = identity<string>("palavarao");
              const umNumero = identity<number>(1.85);
              console.log(typeof umaString);
              console.log(typeof umNumero);
              </code>
            </pre>
            <p>Genericos são muito uteis especialmente em grandes aplicações ou até em pequenas como no uso de biblioteca react, em quase todo codigo que tenha integração</p>
    </ul>
`;
