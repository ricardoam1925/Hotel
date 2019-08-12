import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DepositoMensualPage } from './deposito-mensual.page';

const routes: Routes = [
  {
    path: '',
    component: DepositoMensualPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DepositoMensualPage]
})
export class DepositoMensualPageModule {}
