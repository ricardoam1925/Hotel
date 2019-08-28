import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacturaCompraService } from '../../../services/factura-compra.service';
import { FacturaCompra } from '../../../interfaces/factura-compra';
@Component({
  selector: 'app-factura-compra-diario',
  templateUrl: './factura-compra-diario.page.html',
  styleUrls: ['./factura-compra-diario.page.scss'],
})
export class FacturaCompraDiarioPage implements OnInit {

	fech = null;
	fcompra = null;
  constructor(private activatedRouter: ActivatedRoute, private facturacompraService : FacturaCompraService) { }

  ngOnInit() {
  	this.fech = this.activatedRouter.snapshot.paramMap.get('fecha');
  	this.facturacompraService.getFacturaCompraDiario(this.fech).subscribe(factura_compra => {console.log(factura_compra); this.fcompra = factura_compra;});
  	console.log(this.fcompra);
  }

}
