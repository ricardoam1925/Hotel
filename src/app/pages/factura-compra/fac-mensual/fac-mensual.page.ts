import { Component, OnInit } from '@angular/core';
import { DatePipe } from "@angular/common";
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-fac-mensual',
  templateUrl: './fac-mensual.page.html',
  styleUrls: ['./fac-mensual.page.scss'],
})
export class FacMensualPage implements OnInit {

  constructor(private datePipe : DatePipe, private route : Router, private alert : AlertController) { }
  public date = null;
	fecha = null ;
  ngOnInit() {
  }

  async crear_alerta(){
  	const alerta = await this.alert.create({
  		header: 'Reporte mensual',
  		message: 'Ingrese una fecha',
  		buttons: ['Ok'],
  	});
  	await alerta.present();
  }
  
  enviar_fecha(){
  	

  	if (this.fecha == null) {
  			this.crear_alerta();
  		  	
  	}else{
  	this.date = this.datePipe.transform(this.fecha,"yyyy-MM");
  	this.route.navigate(['/compra-mensual', this.date]);
  	}
  }


}
