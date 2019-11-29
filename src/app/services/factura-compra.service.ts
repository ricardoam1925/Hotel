import { Injectable } from '@angular/core';
import { FacturaCompra } from './../interfaces/factura-compra';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FacturaCompraService {

  constructor(public http : HttpClient,) { }

  getFacturaCompraDiario(fecha : string){
  	const path = 'http://localhost:8080/Sofhotel/server.php/api/report_factura_compra_diario/' + fecha;
    //const path = 'http://localhost:8000/Sofhotel/api/report_factura_compra_diario/' + fecha;
  	return this.http.get<FacturaCompra[]>(path);
  }

  getFacturaCompraMensual(fecha : string){
  	const path = 'http://localhost:8080/Sofhotel/server.php/api/report_factura_compra_mensual/' + fecha;
  	//const path = 'http://localhost:8000/Sofhotel/api/report_factura_compra_mensual/' + fecha;
    return this.http.get<FacturaCompra[]>(path);
  }

  getFacturaCompraEspecifico(fecha_inicial : string, fecha_final : string){
  	const path = 'http://localhost:8080/Sofhotel/server.php/api/report_factura_compra_especifico/' + fecha_inicial + '/' +fecha_final ;
  	//const path = 'http://localhost:8000/Sofhotel/api/report_factura_compra_especifico/' + fecha_inicial + '/' +fecha_final ;
    return this.http.get<FacturaCompra[]>(path);
  }
}
