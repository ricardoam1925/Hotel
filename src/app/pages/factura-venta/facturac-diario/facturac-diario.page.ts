import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacturaVentaService } from '../../../services/factura-venta.service';
import { FacturaVenta } from '../../../interfaces/factura-venta';
@Component({
  selector: 'app-facturac-diario',
  templateUrl: './facturac-diario.page.html',
  styleUrls: ['./facturac-diario.page.scss'],
})
export class FacturacDiarioPage implements OnInit {

	fech = null;
	fventa = null;

  constructor(private activatedRouter: ActivatedRoute, private facturaventaService : FacturaVentaService) { }

  ngOnInit() {
  	this.fech = this.activatedRouter.snapshot.paramMap.get('fecha');
  	this.facturaventaService.getFacturaVentaDiario(this.fech).subscribe(factura_venta => {console.log(factura_venta); this.fventa = factura_venta;});
  	console.log(this.fventa);
  }
  

}
