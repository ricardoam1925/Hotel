import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from '../../../services/general.service';
import { General } from '../../../interfaces/General';
@Component({
  selector: 'app-general-mensual',
  templateUrl: './general-mensual.page.html',
  styleUrls: ['./general-mensual.page.scss'],
})
export class GeneralMensualPage implements OnInit {

  constructor(private activatedRouter: ActivatedRoute, private generalService : GeneralService) { }
    public generate = null;
	public caja = null;
	public deposito = null;
	public fech = null;
	public gasto = null;
	public alquiler = null;
	public totales = null;
  ngOnInit() {
  	this.fech = this.activatedRouter.snapshot.paramMap.get('fecha');
  	this.generalService.getGeneralMensual(this.fech).subscribe(general => {console.log(general); this.generate = general; 
  		this.caja = this.generate[0]; this.deposito = this.generate[1]; this.gasto = this.generate[2];
  		this.alquiler = this.generate[3]; this.totales = this.generate[4]});
  }

}
