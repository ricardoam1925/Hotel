import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UsuarioEspecificoPage } from './usuario-especifico.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioEspecificoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UsuarioEspecificoPage]
})
export class UsuarioEspecificoPageModule {}
