import { Component, OnInit } from '@angular/core';
import { DatePipe } from "@angular/common";
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-facc-especifico',
  templateUrl: './facc-especifico.page.html',
  styleUrls: ['./facc-especifico.page.scss'],
})
export class FaccEspecificoPage implements OnInit {
public date_inicial = null;
	public date_final = null; 
	fecha_inicial = null;
	fecha_final = null;
  constructor(private datePipe: DatePipe, private router : Router, private alert : AlertController) { }

  ngOnInit() {
  }

  async crear_alerta(){
    const alerta = await this.alert.create({
      header: 'Reporte específico',
      message: 'Ingrese fecha',
      buttons: ['Ok'],
    });
    await alerta.present();
  }

  enviar_fecha(){
    if (this.fecha_inicial== null || this.fecha_final == null) {
      this.crear_alerta();   
       }else{
  	 	this.date_inicial = this.datePipe.transform(this.fecha_inicial,"yyyy-MM-dd");
  	 	this.date_final = this.datePipe.transform(this.fecha_final,"yyyy-MM-dd");
  		this.router.navigate(['/facturac-especifico', this.date_inicial, this.date_final]);
  		//this.router.navigateByUrl(`/deposito-diario/${ this.date }`);
    }
 		}

}
