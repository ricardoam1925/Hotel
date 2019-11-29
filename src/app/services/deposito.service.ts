import { Injectable } from '@angular/core';
import { Deposito } from './../interfaces/Deposito';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DepositoService {

  constructor(public http : HttpClient,) { }

  getDepositoDiario(fecha : string){
  	const path = 'http://localhost:8080/Sofhotel/server.php/api/report_depositos_diario/' + fecha;
    //const path = 'http://localhost:8000/Sofhotel/api/report_depositos_diario/' + fecha;
  	return this.http.get<Deposito[]>(path);
  }

  getDepositoMensual(fecha : string){
  	const path = 'http://localhost:8080/Sofhotel/server.php/api/report_depositos_mensual/' + fecha;
   // const path = 'http://localhost:8000/Sofhotel/api/report_depositos_mensual/' + fecha;
  	return this.http.get<Deposito[]>(path);
  }

  getDepositoEspecifico(fecha_inicial : string, fecha_final : string){
  	const path = 'http://localhost:8080/Sofhotel/server.php/api/report_depositos_especifico/' + fecha_inicial + '/' +fecha_final ;
    //const path = 'http://localhost:8000/Sofhotel/api/report_depositos_especifico/' + fecha_inicial + '/' +fecha_final ;
  	return this.http.get<Deposito[]>(path);
  }
}
