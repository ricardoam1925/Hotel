import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GastoService } from '../../../services/gasto.service';
import { Gasto } from '../../../interfaces/Gasto';
@Component({
  selector: 'app-gasto-especifico',
  templateUrl: './gasto-especifico.page.html',
  styleUrls: ['./gasto-especifico.page.scss'],
})
export class GastoEspecificoPage implements OnInit {

  constructor(private activatedRouter: ActivatedRoute, private depositoService :GastoService) { }
   fech_inicial = null;
  fech_final = null;
	public gast = null;

  ngOnInit() {
  	this.fech_inicial = this.activatedRouter.snapshot.paramMap.get('fecha_i');
  	this.fech_final= this.activatedRouter.snapshot.paramMap.get('fecha_f');
  	this.depositoService.getGastoEspecifico(this.fech_inicial, this.fech_final).subscribe(deposito => {console.log(deposito); this.gast = deposito;});

  }

}
