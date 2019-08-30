import { Component, OnInit } from '@angular/core';
import { HabitacionService } from '../../services/habitacion.service';
import { Habitacion } from '../../interfaces/Habitacion';
@Component({
  selector: 'app-habitacion',
  templateUrl: './habitacion.page.html',
  styleUrls: ['./habitacion.page.scss'],
})
export class HabitacionPage implements OnInit {
	public general = null;
	public habitacion = null;
	public totales = null;
  public i = 0;
  constructor( private habitacionService : HabitacionService) { }

  ngOnInit() {
  	this.habitacionService.getHabitacion().subscribe(generate => {console.log(generate); this.general = generate; this.habitacion = this.general[0]; this.totales = this.general[1]});
  	//console.log([this.general, this.habitacion, this.totales]);
  }

}
