import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../../../services/usuario.service';
import { Usuario } from '../../../../interfaces/Usuario';
import { Router } from "@angular/router";
@Component({
  selector: 'app-usuario-mensual',
  templateUrl: './usuario-mensual.page.html',
  styleUrls: ['./usuario-mensual.page.scss'],
})
export class UsuarioMensualPage implements OnInit {

  constructor(private activatedRouter: ActivatedRoute, private usuarioService : UsuarioService, private router : Router) { }
	public users = null;
 	public fecha = null;
  	
  	public id_usuario = null;
  ngOnInit() {
  	this.fecha = this.activatedRouter.snapshot.paramMap.get('fecha');
  	this.usuarioService.getAllUsers().subscribe(usuario => {console.log(usuario); this.users = usuario;});
    
  }

}
