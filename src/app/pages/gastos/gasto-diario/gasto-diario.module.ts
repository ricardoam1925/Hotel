import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GastoDiarioPage } from './gasto-diario.page';

const routes: Routes = [
  {
    path: '',
    component: GastoDiarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GastoDiarioPage]
})
export class GastoDiarioPageModule {}
