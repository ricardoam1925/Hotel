import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../interfaces/Usuario';
import {Individual} from '../../../interfaces/Individual';
@Component({
  selector: 'app-individual-mensual',
  templateUrl: './individual-mensual.page.html',
  styleUrls: ['./individual-mensual.page.scss'],
})
export class IndividualMensualPage implements OnInit {

  constructor(private activatedRouter : ActivatedRoute, private usuarioService: UsuarioService) { }
  id_usua = null;
  user = null;
  fech = null;


  ngOnInit() {
  	this.id_usua = this.activatedRouter.snapshot.paramMap.get('ide');
  	this.fech = this.activatedRouter.snapshot.paramMap.get('fecha');
    //console.log([this.id_usuario, this.fecha_inicial, this.fecha_final]);
  	this.usuarioService.getReporteUsuarioMensual(this.id_usua, this.fech).subscribe(usuario => {console.log(usuario); this.user = usuario;});
  }

}
