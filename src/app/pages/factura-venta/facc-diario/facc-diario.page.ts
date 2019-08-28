import { Component, OnInit } from '@angular/core';
import { DatePipe } from "@angular/common";
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-facc-diario',
  templateUrl: './facc-diario.page.html',
  styleUrls: ['./facc-diario.page.scss'],
})
export class FaccDiarioPage implements OnInit {
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
  		this.router.navigate(['/facturac-diario', this.date]);

  		//this.router.navigateByUrl(`/deposito-diario/${ this.date }`);
    }
 		}

}
