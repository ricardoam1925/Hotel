import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../interfaces/Usuario';
import {Individual} from '../../../interfaces/Individual';
@Component({
  selector: 'app-individual-especifico',
  templateUrl: './individual-especifico.page.html',
  styleUrls: ['./individual-especifico.page.scss'],
})
export class IndividualEspecificoPage implements OnInit {

  constructor(private activatedRouter : ActivatedRoute, private usuarioService: UsuarioService) { }
  id_usua = null;
  user = null;
  fech_inicial = null;
  fech_final = null;

  ngOnInit() {

  	this.id_usua = this.activatedRouter.snapshot.paramMap.get('ide');
  	this.fech_inicial = this.activatedRouter.snapshot.paramMap.get('fecha_i');
  	this.fech_final = this.activatedRouter.snapshot.paramMap.get('fecha_f');
    //console.log([this.id_usuario, this.fecha_inicial, this.fecha_final]);
  	this.usuarioService.getReporteUsuarioEspecifico(this.id_usua, this.fech_inicial, this.fech_final).subscribe(usuario => {console.log(usuario); this.user = usuario;});
//  console.log([this.id_usua,this.fech_inicial, this.fech_final]);
  }

}
