import { Usuario } from './../Models/Usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOption = {
  headers : new HttpHeaders({
    'Content-type': 'Application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'http://localhost:5001/api/usuarios'
  constructor(private http: HttpClient) { }

  GetAll(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url)
  }

  Get(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(this.url + `/${id}`)
  }

  Create(usuario: Usuario): Observable<any>{
    return this.http.post(this.url, usuario, httpOption)
  }

  Update(usuario: Usuario): Observable<any>{
    return this.http.put(this.url, usuario, httpOption)
  }

  delete(id: number): Observable<any>{
    return this.http.delete(this.url + `/${id}`, httpOption)
  }
}
