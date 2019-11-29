import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from '../../../services/general.service';
import { General } from '../../../interfaces/General';

@Component({
  selector: 'app-general-diario',
  templateUrl: './general-diario.page.html',
  styleUrls: ['./general-diario.page.scss'],
})
export class GeneralDiarioPage implements OnInit {

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
	  this.generalService.getGeneralDiario(this.fech).subscribe(general => {console.log(general); 
		this.generate = general; 
		  this.caja = this.generate[0]; 
		  this.deposito = this.generate[1]; 
		  this.gasto = this.generate[2];
		  this.alquiler = this.generate[3]; 
		  this.totales = this.generate[4]});
  
		}

}
