import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioFiltroService } from '../../services/usuario-filtro.service';
import { Usuario } from '../../interfaces/Usuario';
@Component({
  selector: 'app-usuario-filtro',
  templateUrl: './usuario-filtro.page.html',
  styleUrls: ['./usuario-filtro.page.scss'],
})
export class UsuarioFiltroPage implements OnInit {

	argumento = null;
  	public user = null;
  constructor(private activatedRouter : ActivatedRoute, private usuarioFiltroService: UsuarioFiltroService) { }

  ngOnInit() {
  	this.argumento = this.activatedRouter.snapshot.paramMap.get('id');
  	this.usuarioFiltroService.getUser(this.argumento).subscribe(usuario => {console.log(usuario); this.user = usuario;});
  
  }

}
