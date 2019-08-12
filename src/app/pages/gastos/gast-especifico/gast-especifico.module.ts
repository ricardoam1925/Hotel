import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GastEspecificoPage } from './gast-especifico.page';

const routes: Routes = [
  {
    path: '',
    component: GastEspecificoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GastEspecificoPage]
})
export class GastEspecificoPageModule {}
