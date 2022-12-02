import { Usuario } from './../../Models/Usuario';
import { UsuarioService } from './../../Services/usuario.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css']
})
export class UsuariosListComponent {
  displayCadastro: boolean;
  displayDetalhes: boolean;
  usuarioEditar: Usuario;
  usuariosList: Usuario[] = [];

  constructor(private usuarioService: UsuarioService){

  }

  ngOnInit(){
    this.getAll();
  }

  getAll(){
    this.usuarioService.GetAll().subscribe(
      data => {
        this.usuariosList = data;
      },
      error => {
        this.usuariosList = [];
      }
    );
  }

  Create(){
    console.log(this.displayCadastro)
    this.displayCadastro = true;
  }

  Delete(id: number){
    this.usuarioService.delete(id).subscribe(
      data => {
        this.getAll();
      },
      error => {
        alert("Erro ao excluir usuario")
      }
    )
  }

  Editar(usuario: Usuario){
    this.displayDetalhes = true;
    this.usuarioEditar = usuario;
  }
}
