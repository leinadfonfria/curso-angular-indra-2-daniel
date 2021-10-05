import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private httpClient: HttpClient) { }

  getUsuarios() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users')
  }

  getUsuarioById(id: string) {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users/'+id)
  }
}
