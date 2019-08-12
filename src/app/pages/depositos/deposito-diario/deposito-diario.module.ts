import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DepositoDiarioPage } from './deposito-diario.page';

const routes: Routes = [
  {
    path: '',
    component: DepositoDiarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DepositoDiarioPage]
})
export class DepositoDiarioPageModule {}
