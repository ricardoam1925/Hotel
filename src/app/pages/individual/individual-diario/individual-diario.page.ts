import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../interfaces/Usuario';
import {Individual} from '../../../interfaces/Individual';
@Component({
  selector: 'app-individual-diario',
  templateUrl: './individual-diario.page.html',
  styleUrls: ['./individual-diario.page.scss'],
})
export class IndividualDiarioPage implements OnInit {

  constructor(private activatedRouter : ActivatedRoute, private usuarioService: UsuarioService) { }
  id_usuario = null;
  user = null;
  ngOnInit() {
  	this.id_usuario = this.activatedRouter.snapshot.paramMap.get('id');
  	
  	this.usuarioService.getReporteUsuarioDiario(this.id_usuario).subscribe(usuario => {console.log(usuario); this.user = usuario;});
  

  }

}
