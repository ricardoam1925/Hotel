import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interfaces/Usuario';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  constructor(private usuarioService: UsuarioService) { }
  public users = null;
  ngOnInit() {
  	this.usuarioService.getAllUsers().subscribe(usuario => {console.log(usuario); this.users = usuario;
    });
  }

/*  openWebsite(){
  	window.open(this.user.Website, '_blank');
  }*/

  
  getAllUser(){
    this.usuarioService.getAllUsers().subscribe(usuario => {console.log(usuario); this.users = usuario;
    });
    //this.user = this.usuarioService.getAllUsers();
    
}

}
