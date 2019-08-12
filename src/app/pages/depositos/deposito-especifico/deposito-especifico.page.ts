import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepositoService } from '../../../services/deposito.service';
import { Deposito } from '../../../interfaces/Deposito';
@Component({
  selector: 'app-deposito-especifico',
  templateUrl: './deposito-especifico.page.html',
  styleUrls: ['./deposito-especifico.page.scss'],
})
export class DepositoEspecificoPage implements OnInit {

	 fech_inicial = null;
  fech_final = null;
	public depo = null;
  constructor(private activatedRouter: ActivatedRoute, private depositoService : DepositoService) { }
 

  ngOnInit() {
  	this.fech_inicial = this.activatedRouter.snapshot.paramMap.get('fecha_i');
  	this.fech_final= this.activatedRouter.snapshot.paramMap.get('fecha_f');
  	this.depositoService.getDepositoEspecifico(this.fech_inicial, this.fech_final).subscribe(deposito => {console.log(deposito); this.depo = deposito;});

  	
  }


}
