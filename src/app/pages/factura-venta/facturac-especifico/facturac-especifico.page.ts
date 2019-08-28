import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacturaVentaService } from '../../../services/factura-venta.service';
import { FacturaVenta } from '../../../interfaces/factura-venta';
@Component({
  selector: 'app-facturac-especifico',
  templateUrl: './facturac-especifico.page.html',
  styleUrls: ['./facturac-especifico.page.scss'],
})
export class FacturacEspecificoPage implements OnInit {

  constructor(private activatedRouter: ActivatedRoute, private facturaventaService : FacturaVentaService) { }
  fech_inicial = null;
  fech_final = null;
	public fventa = null;
  ngOnInit() {
  	this.fech_inicial = this.activatedRouter.snapshot.paramMap.get('fecha_i');
  	this.fech_final= this.activatedRouter.snapshot.paramMap.get('fecha_f');
  	this.facturaventaService.getFacturaVentaEspecifico(this.fech_inicial, this.fech_final).subscribe(factura_venta => {console.log(factura_venta); this.fventa = factura_venta;});

  }

}
