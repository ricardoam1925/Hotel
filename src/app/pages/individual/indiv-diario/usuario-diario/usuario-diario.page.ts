import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../../../services/usuario.service';
import { Usuario } from '../../../../interfaces/Usuario';

@Component({
  selector: 'app-usuario-diario',
  templateUrl: './usuario-diario.page.html',
  styleUrls: ['./usuario-diario.page.scss'],
})
export class UsuarioDiarioPage implements OnInit {

  constructor(private activatedRouter: ActivatedRoute, private usuarioService : UsuarioService) { }
  public users = null;
  public fech = null;
  ngOnInit() {
  	this.fech = this.activatedRouter.snapshot.paramMap.get('fecha');
  	this.usuarioService.getUsuariosDiario(this.fech).subscribe(usuario => {console.log(usuario); this.users = usuario});
  }

}
