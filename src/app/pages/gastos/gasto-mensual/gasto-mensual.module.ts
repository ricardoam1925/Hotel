import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GastoMensualPage } from './gasto-mensual.page';

const routes: Routes = [
  {
    path: '',
    component: GastoMensualPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GastoMensualPage]
})
export class GastoMensualPageModule {}
