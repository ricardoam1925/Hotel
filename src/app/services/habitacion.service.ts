import { Injectable } from '@angular/core';
import { Habitacion } from './../interfaces/Habitacion';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HabitacionService {
	public habitacion = null;
	public totales = null;
  constructor(public http : HttpClient,) { }
  getHabitacion(){
  	const path = 'http://localhost:8080/Sofhotel/server.php/api/report_habitacion/';
  	return this.http.get<Habitacion[]>(path);
  }
}
