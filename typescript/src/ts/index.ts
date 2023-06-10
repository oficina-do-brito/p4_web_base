class Pessoa {
    constructor( private _email:string, private _senha:string, private _nome:string, private _dado?: null |string){}
    public set nome(nome:string){
        this._nome = nome;
    }
    public modificarTudo( email:string,  senha:string,  nome:string,  dado?: null |string):void{
        this._email = email;
        this._senha = senha;
        this._dado = "c";
    }
    public modificarTudo( email:string,  senha:string):void{
        this._email = email;
        this._senha = senha;
        this._dado = "c";
    }

}