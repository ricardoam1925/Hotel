import { Injectable } from '@angular/core';
import { General } from './../interfaces/General';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(public http : HttpClient,) { }

  getGeneralDiario(fecha: string){
  	const path = 'http://localhost:8080/Sofhotel/server.php/api/report_general_diario/' +fecha;
  	return this.http.get<General[]>(path);
  }

   getGeneralMensual(fecha : string){
  	const path = 'http://localhost:8080/Sofhotel1.1/server.php/api/report_general_mensual/' + fecha;
  	return this.http.get<General[]>(path);
  }

  getGeneralEspecifico(fecha_inicial : string, fecha_final : string){
  	const path = 'http://localhost:8080/Sofhotel1.1/server.php/api/report_general_especifico/' + fecha_inicial + '/' +fecha_final ;
  	return this.http.get<General[]>(path);
  }
}
