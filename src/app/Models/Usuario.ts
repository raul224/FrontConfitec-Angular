export class Usuario {
  id: number = 0;
  nome: string;
  sobrenome: string;
  email: string;
  dataNascimento: Date;
  escolaridade: string;

  constructor(nome: string, sobrenome: string, email: string, dataNascimento: Date, escolaridade: string){
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.email = email,
    this.dataNascimento = dataNascimento,
    this.escolaridade = escolaridade
  }
}
