import { Injectable } from '@angular/core';
import { Gasto } from './../interfaces/Gasto';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GastoService {

  constructor(public http : HttpClient,) { }

  getGastoDiario(fecha : string){
  	const path = 'http://localhost:8080/Sofhotel1.1/server.php/api/report_gastos_diario/' + fecha;
  	return this.http.get<Gasto[]>(path);
  }

  getGastoMensual(fecha : string){
  	const path = 'http://localhost:8080/Sofhotel1.1/server.php/api/report_gastos_mensual/' + fecha;
  	return this.http.get<Gasto[]>(path);
  }

  getGastoEspecifico(fecha_inicial : string, fecha_final : string){
  	const path = 'http://localhost:8080/Sofhotel1.1/server.php/api/report_gastos_especifico/' + fecha_inicial + '/' +fecha_final ;
  	return this.http.get<Gasto[]>(path);
  }
}
