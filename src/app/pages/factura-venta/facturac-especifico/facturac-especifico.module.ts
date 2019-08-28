import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FacturacEspecificoPage } from './facturac-especifico.page';

const routes: Routes = [
  {
    path: '',
    component: FacturacEspecificoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FacturacEspecificoPage]
})
export class FacturacEspecificoPageModule {}
