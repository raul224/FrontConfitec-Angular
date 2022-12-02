export class Usuario {
  Id: number = 0;
  Nome: string;
  SobreNome: string;
  Email: string;
  DataNascimento: Date;
  Escolaridade: string;

  constructor(nome: string, sobrenome: string, email: string, dataNascimento: Date, escolaridade: string){
    this.Nome = nome,
    this.SobreNome = sobrenome,
    this.Email = email,
    this.DataNascimento = dataNascimento,
    this.Escolaridade = escolaridade
  }
}
