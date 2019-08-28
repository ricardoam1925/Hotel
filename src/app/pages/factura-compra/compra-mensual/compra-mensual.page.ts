import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacturaCompraService } from '../../../services/factura-compra.service';
import { FacturaCompra } from '../../../interfaces/factura-compra';
@Component({
  selector: 'app-compra-mensual',
  templateUrl: './compra-mensual.page.html',
  styleUrls: ['./compra-mensual.page.scss'],
})
export class CompraMensualPage implements OnInit {
	 fech = null;
  fcompra = null;
  constructor(private activatedRouter: ActivatedRoute, private facturacompraService : FacturaCompraService) { }
 
  ngOnInit() {
  	this.fech = this.activatedRouter.snapshot.paramMap.get('fecha');
  	this.facturacompraService.getFacturaCompraMensual(this.fech).subscribe(factura => {console.log(factura); this.fcompra = factura;});
  	console.log(this.fcompra);
  }

}
