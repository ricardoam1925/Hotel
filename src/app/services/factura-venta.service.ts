import { Injectable } from '@angular/core';
import { FacturaVenta } from './../interfaces/factura-venta';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FacturaVentaService {

  constructor(public http : HttpClient,) { }
  

  getFacturaVentaDiario(fecha : string){
  	const path = 'http://localhost:8080/Sofhotel/server.php/api/report_factura_venta_diario/' + fecha;
  	//const path = 'http://localhost:8000/Sofhotel/api/report_factura_venta_diario/' + fecha;
    return this.http.get<FacturaVenta[]>(path);
  }

  getFacturaVentaMensual(fecha : string){
  	const path = 'http://localhost:8080/Sofhotel/server.php/api/report_factura_venta_mensual/' + fecha;
    //const path = 'http://localhost:8000/Sofhotel/api/report_factura_venta_mensual/' + fecha;
  	return this.http.get<FacturaVenta[]>(path);
  }

  getFacturaVentaEspecifico(fecha_inicial : string, fecha_final : string){
  	const path = 'http://localhost:8080/Sofhotel/server.php/api/report_factura_venta_especifico/' + fecha_inicial + '/' +fecha_final ;
    //const path = 'http://localhost:8000/Sofhotel/api/report_factura_venta_especifico/' + fecha_inicial + '/' +fecha_final ;
  	return this.http.get<FacturaVenta[]>(path);
  }
}
