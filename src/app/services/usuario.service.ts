import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './../interfaces/Usuario';
import { Individual } from './../interfaces/Individual';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
  	public http: HttpClient,
  	//public http: Http,
  	) { }

 getAllUsers(){
  	const path = 'http://localhost:8080/Sofhotel/server.php/api/usuario_api_report';
  	return this.http.get<Usuario[]>(path);
  }


  getUsuariosDiario(fecha : string){
  	const path = 'http://localhost:8080/Sofhotel/server.php/api/consult_caja_usuario_dia/' + fecha;
  	return this.http.get<Usuario[]>(path);
   }

   getReporteUsuarioDiario(id : string){
   		const path = 'http://localhost:8080/Sofhotel/server.php/api/report_usuario_diario/' + id;
  	return this.http.get<Individual[]>(path);
   }

   getReporteUsuarioMensual(id : string, fecha : string){
       const path = 'http://localhost:8080/Sofhotel/server.php/api/report_usuario_mes/' + id + '/' + fecha;
    return this.http.get<Individual[]>(path);
   }

   getReporteUsuarioEspecifico(id : string, fecha_inicial : string, fecha_final :string){
     const path = 'http://localhost:8080/Sofhotel/server.php/api/report_usuario_especifico/' + id + '/' + fecha_inicial + '/' + fecha_final ;
    return this.http.get<Individual[]>(path);
   }



 
}
