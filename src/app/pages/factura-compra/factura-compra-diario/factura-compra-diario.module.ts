import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FacturaCompraDiarioPage } from './factura-compra-diario.page';

const routes: Routes = [
  {
    path: '',
    component: FacturaCompraDiarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FacturaCompraDiarioPage]
})
export class FacturaCompraDiarioPageModule {}
