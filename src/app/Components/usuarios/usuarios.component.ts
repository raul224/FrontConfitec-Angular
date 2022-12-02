import { Usuario } from './../../Models/Usuario';
import { UsuarioService } from './../../Services/usuario.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  @Input() displayCadastro: boolean;
  escolaridades: string[] = [
    "Infantil",
    "Fundamental",
    "Medio",
    "Superior"
  ];
  usuario: Usuario;

  constructor(private usuariosService: UsuarioService){

  }

  Cadastrar(form: any){
    this.usuario = new Usuario(form.value.nome, form.value.sobreNome, form.value.email, form.value.dataNascimento, form.value.escolaridade);
    this.usuariosService.Create(this.usuario).subscribe(
      data => {
        this.displayCadastro = false;
      },
      error => {
        alert("Erro ao cadastrar usuario");
      }
    )
  }
}
