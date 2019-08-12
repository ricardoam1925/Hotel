import { Component, OnInit } from '@angular/core';
import { DatePipe } from "@angular/common";
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-dep-diario',
  templateUrl: './dep-diario.page.html',
  styleUrls: ['./dep-diario.page.scss'],
})
export class DepDiarioPage implements OnInit {
	//fecha a enviar en ruta
	public date = null; 
	//modelo nG
	fecha = null;

  constructor(private datePipe: DatePipe, private router : Router, private alert : AlertController) { }

  ngOnInit() {
  }
  async crear_alerta(){
    const alerta = await this.alert.create({
      header: 'Reporte diario',
      message: 'Ingrese una fecha',
      buttons: ['Ok'],
    });
    await alerta.present();
  }

  enviar_fecha(){
    if (this.fecha== null) {
      this.crear_alerta();   
       }else{
  	 	this.date = this.datePipe.transform(this.fecha,"yyyy-MM-dd");
  		this.router.navigate(['/deposito-diario', this.date]);
  		//this.router.navigateByUrl(`/deposito-diario/${ this.date }`);
    }
 		}

}
