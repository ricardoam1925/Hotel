import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GastoService } from '../../../services/gasto.service';
import { Gasto } from '../../../interfaces/Gasto';
@Component({
  selector: 'app-gasto-diario',
  templateUrl: './gasto-diario.page.html',
  styleUrls: ['./gasto-diario.page.scss'],
})
export class GastoDiarioPage implements OnInit {

	fech = null;
	gast = null;
  constructor(private activatedRouter: ActivatedRoute, private gastoService : GastoService) { }

  ngOnInit() {
  	this.fech = this.activatedRouter.snapshot.paramMap.get('fecha');
  	this.gastoService.getGastoDiario(this.fech).subscribe(deposito => {console.log(deposito); this.gast = deposito;});
  	console.log(this.gast);
  }

}
