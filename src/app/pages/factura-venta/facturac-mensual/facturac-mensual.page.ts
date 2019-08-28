import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacturaVentaService } from '../../../services/factura-venta.service';
import { FacturaVenta } from '../../../interfaces/factura-venta';
@Component({
  selector: 'app-facturac-mensual',
  templateUrl: './facturac-mensual.page.html',
  styleUrls: ['./facturac-mensual.page.scss'],
})
export class FacturacMensualPage implements OnInit {

  constructor(private activatedRouter: ActivatedRoute, private facturaventaService : FacturaVentaService) { }
  fech = null;
  fventa = null;
  ngOnInit() {
  	this.fech = this.activatedRouter.snapshot.paramMap.get('fecha');
  	this.facturaventaService.getFacturaVentaMensual(this.fech).subscribe(factura_venta => {console.log(factura_venta); this.fventa = factura_venta;});
  
  }

}
