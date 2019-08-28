import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FacturaCompraEspecificoPage } from './factura-compra-especifico.page';

const routes: Routes = [
  {
    path: '',
    component: FacturaCompraEspecificoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FacturaCompraEspecificoPage]
})
export class FacturaCompraEspecificoPageModule {}
