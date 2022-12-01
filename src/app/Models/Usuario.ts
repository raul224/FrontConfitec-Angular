import { Escolaridade } from './Escolaridade';

export class Usuario {
  id: number;
  nome: string;
  sobreNome: string;
  email: string;
  dataNascimento: Date;
  escolaridade: Escolaridade;
}
