import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './../interfaces/Usuario';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
  	public http: HttpClient,
  	//public http: Http,
  	) { }

 getAllUsers(){
  	const path = 'http://localhost:8080/Sofhotel1.1/server.php/api/usuario_api_report';
  	return this.http.get<Usuario[]>(path);
  }

 
}
