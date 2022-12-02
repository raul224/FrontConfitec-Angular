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

  Cadastrar(usuario: Usuario){
    this.usuariosService.Create(usuario).subscribe(
      data => {
        this.displayCadastro = false;
      },
      error => {
        alert("Erro ao cadastrar usuario");
      }
    )
  }
}
