import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table'
import { ToolbarModule } from 'primeng/toolbar'
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';

import { UsuarioService } from './Services/usuario.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http"
import { ReactiveFormsModule } from '@angular/forms';
import { UsuariosComponent } from './Components/usuarios/usuarios.component';
import { UsuariosListComponent } from './Components/usuarios-list/usuarios-list.component';
import { UsuariosDetalhesComponent } from './Components/usuarios-detalhes/usuarios-detalhes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    UsuariosListComponent,
    UsuariosDetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableModule,
    ToolbarModule,
    DialogModule,
    DropdownModule,
    CalendarModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [HttpClientModule, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
