import { UsuarioService } from './../../Services/usuario.service';
import { Component, Input } from '@angular/core';
import { Usuario } from 'src/app/Models/Usuario';

@Component({
  selector: 'app-usuarios-detalhes',
  templateUrl: './usuarios-detalhes.component.html',
  styleUrls: ['./usuarios-detalhes.component.css']
})
export class UsuariosDetalhesComponent {
  @Input() displayDetalhes: boolean;
  escolaridades: string[] = [
    "Infantil",
    "Fundamental",
    "Medio",
    "Superior"
  ];
  @Input() usuario: Usuario;

  constructor(private usuariosService: UsuarioService){

  }

  ngOnInit(){
    this.usuariosService.Get(this.usuario.id).subscribe(
      data => {
        this.usuario = data;
      },
      error => {
        alert("Erro ao obter dados do usuario")
      }
    )
  }

  Editar(usuario: Usuario){
    this.usuariosService.Update(usuario).subscribe(
      data => {
        this.displayDetalhes = false;
      },
      error => {
        alert("Erro ao editar usuario")
      }
    )
  }
}
