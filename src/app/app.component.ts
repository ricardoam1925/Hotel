import { Component } from '@angular/core';
//import { UsuarioService } from './services/usuario.service';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
  //templateUrl: 'home/home.page.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Usuarios',
      url: '/usuario',
      icon: 'person'
    },
    {
      title: 'Habitaciones',
      url: '/habitacion',
      icon: 'bed'
    },

     {
      title: 'Depositos',
      url: '/depositos',
      icon: 'cash'
    },

    {
      title: 'Gastos',
      url: '/gastos',
      icon: 'calculator'
    },
    //  {
    //   title: 'General',
    //   url: '/generales',
    //   icon: 'clipboard'
    // },
    //   {
    //   title: 'Individual',
    //   url: '/individual',
    //   icon: 'person'
    // },
     {
      title: 'Compras',
      url: '/factura-compra',
      icon: 'basket'
    },
     {
      title: 'Ventas',
      url: '/factura-venta',
      icon: 'logo-usd'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  

}
