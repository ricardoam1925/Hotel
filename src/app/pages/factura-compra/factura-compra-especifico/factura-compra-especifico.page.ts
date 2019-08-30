import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacturaCompraService } from '../../../services/factura-compra.service';
import { FacturaCompra } from '../../../interfaces/factura-compra';
@Component({
  selector: 'app-factura-compra-especifico',
  templateUrl: './factura-compra-especifico.page.html',
  styleUrls: ['./factura-compra-especifico.page.scss'],
})
export class FacturaCompraEspecificoPage implements OnInit {

  constructor(private activatedRouter: ActivatedRoute, private facturacompraService : FacturaCompraService) { }
	fech_inicial = null;
  	fech_final = null;
	public fcompra = null;
  facompra = null;
  total = null;
  ngOnInit() {
  	this.fech_inicial = this.activatedRouter.snapshot.paramMap.get('fecha_i');
  	this.fech_final= this.activatedRouter.snapshot.paramMap.get('fecha_f');
  	this.facturacompraService.getFacturaCompraEspecifico(this.fech_inicial, this.fech_final).subscribe(factura_compra => {console.log(factura_compra); this.facompra = factura_compra; this.fcompra = this.facompra[0]; this.total = this.facompra[1]});

  }

}
