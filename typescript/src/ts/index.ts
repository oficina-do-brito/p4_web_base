function criaPessoa(nome: string, idade: number, altura: number) {

    const Pessoa: { nome: string; idade: number; altura: number; falar(): void } =
      {
        nome: nome,
        idade: idade,
        altura: altura,
        falar() {
          console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`);
        },
      };
    return Pessoa;
   }

   console.log(typeof criaPessoa("João", 27, 1.75));
   const pessoa2 = criaPessoa("matheus", 38, 1.76);
   console.log(pessoa2.idade);
   