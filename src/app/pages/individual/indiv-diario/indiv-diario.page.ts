import { Component, OnInit } from '@angular/core';
import { DatePipe } from "@angular/common";
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-indiv-diario',
  templateUrl: './indiv-diario.page.html',
  styleUrls: ['./indiv-diario.page.scss'],
})
export class IndivDiarioPage implements OnInit {

  constructor(private datePipe: DatePipe, private router : Router, private alert : AlertController) { }
  	public date = null; 
	fecha = null;
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
  		this.router.navigate(['/usuario-diario', this.date]);

  		//this.router.navigateByUrl(`/deposito-diario/${ this.date }`);
    }
 		}

}
