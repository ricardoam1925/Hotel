import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GastoService } from '../../../services/gasto.service';
import { Gasto } from '../../../interfaces/Gasto';
@Component({
  selector: 'app-gasto-mensual',
  templateUrl: './gasto-mensual.page.html',
  styleUrls: ['./gasto-mensual.page.scss'],
})
export class GastoMensualPage implements OnInit {

  constructor(private activatedRouter: ActivatedRoute, private gastoService : GastoService) { }
  fech = null;
  gast = null;

  ngOnInit() {
  	this.fech = this.activatedRouter.snapshot.paramMap.get('fecha');
  	this.gastoService.getGastoMensual(this.fech).subscribe(deposito => {console.log(deposito); this.gast = deposito;});
  
  }

}
