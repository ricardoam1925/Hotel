import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from '../../../services/general.service';
import { General } from '../../../interfaces/General';
@Component({
  selector: 'app-general-especifico',
  templateUrl: './general-especifico.page.html',
  styleUrls: ['./general-especifico.page.scss'],
})
export class GeneralEspecificoPage implements OnInit {

  constructor(private activatedRouter: ActivatedRoute, private generalService : GeneralService) { }
  public generate = null;
	public caja = null;
	public deposito = null;
	public fech_inicial = null;
	public fech_final = null;
	public gasto = null;
	public alquiler = null;
	public totales = null;

  ngOnInit() {
  		this.fech_inicial = this.activatedRouter.snapshot.paramMap.get('fecha_i');
  	this.fech_final= this.activatedRouter.snapshot.paramMap.get('fecha_f');
  	this.generalService.getGeneralEspecifico(this.fech_inicial,this.fech_final).subscribe(general => {console.log(general); this.generate = general; 
  		this.caja = this.generate[0]; this.deposito = this.generate[1]; this.gasto = this.generate[2];
  		this.alquiler = this.generate[3]; this.totales = this.generate[4]});
  }

}
