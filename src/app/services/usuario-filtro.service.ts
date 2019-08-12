import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './../interfaces/Usuario';
@Injectable({
  providedIn: 'root'
})
export class UsuarioFiltroService {

  constructor(public http: HttpClient,) {
  }

  getUser(id : string){
  	const path = 'http://localhost:8080/Sofhotel1.1/server.php/api/usuario_api_filtro/' + id;
  	return this.http.get<Usuario[]>(path);
   }
}
