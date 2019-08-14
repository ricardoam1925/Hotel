import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../../../services/usuario.service';
import { Usuario } from '../../../../interfaces/Usuario';
import { Router } from "@angular/router";
@Component({
  selector: 'app-usuario-especifico',
  templateUrl: './usuario-especifico.page.html',
  styleUrls: ['./usuario-especifico.page.scss'],
})
export class UsuarioEspecificoPage implements OnInit {

  constructor(private activatedRouter: ActivatedRoute, private usuarioService : UsuarioService, private router : Router) { }
  public users = null;
  public fecha_inicial = null;
  public fecha_final = null;
  public id_usuario = null;
  ngOnInit() {
  	this.fecha_inicial = this.activatedRouter.snapshot.paramMap.get('fecha_i');
  	this.fecha_final = this.activatedRouter.snapshot.paramMap.get('fecha_f');
  	this.usuarioService.getAllUsers().subscribe(usuario => {console.log(usuario); this.users = usuario;});
    
  }

  enviar_parametros(ide : string){
    this.id_usuario = ide;
    this.router.navigate(['/individual-especifico',this.id_usuario, this.fecha_inicial, this.fecha_final]);
  }

}
